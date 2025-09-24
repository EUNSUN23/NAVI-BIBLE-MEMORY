import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import VerseCard from '@features/verseDisplay/components/verseCard';
import { useRef, useState } from 'react';
import { useBibleVersionStore } from '@store/bibleVersionStore';
import { useVerseSelectStore } from '@store/verseSelectStore';
import { useShallow } from 'zustand/react/shallow';
import { useVersesDetail } from '@features/verseDisplay/api/getVersesDetail';
import SwiperPagination from 'src/features/verseDisplay/components/swiperPagination';

function VerseCardSwiper() {
  const bibleVersion = useBibleVersionStore(state => state.bibleVersion);
  const verseIds = useVerseSelectStore(useShallow(state => state.verseIds));

  const { data } = useVersesDetail(verseIds, bibleVersion);

  const swiperRef = useRef<SwiperCore>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const navigation = {
    prevEl: '.to-prev-slide',
    nextEl: '.to-next-slide',
  };

  return (
    <div className='relative my-8 w-full mobile:w-[360px]'>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={navigation}
        onSwiper={swiper => (swiperRef.current = swiper)}
        onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
      >
        {data.map(v => (
          <SwiperSlide key={`card-${v.idx}`}>
            <VerseCard data={v} />
          </SwiperSlide>
        ))}
        <SwiperPagination verses={data} activeIndex={activeIndex} />
      </Swiper>
    </div>
  );
}

export default VerseCardSwiper;
