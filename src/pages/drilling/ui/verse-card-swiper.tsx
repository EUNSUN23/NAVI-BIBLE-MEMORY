import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { orderVerseDetails, verseApi, VerseCard } from '@/entities/verse';
import { useVerseSelectStore } from '@/features/verse-select';
import { useRef, useState } from 'react';
import { useBibleVersionStore } from '@/entities/bibleVersion';
import { useShallow } from 'zustand/react/shallow';
import { VerseCardSwiperPagination } from './verse-card-swiper-pagination';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useCardHideOptionStore } from '@/entities/cardHideOption';

function VerseCardSwiper() {
  const { code: hideOption } = useCardHideOptionStore(
    state => state.cardHideOption,
  );
  const bibleVersion = useBibleVersionStore(state => state.bibleVersion);
  const verseIds = useVerseSelectStore(useShallow(state => state.verseIds));

  const { data } = useSuspenseQuery(
    verseApi.detailList(verseIds, bibleVersion),
  );

  const verseDetails = orderVerseDetails(data);

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
        {verseDetails.map(v => (
          <SwiperSlide key={`card-${v.card_info.idx}`}>
            <VerseCard hideOption={hideOption} data={v} />
          </SwiperSlide>
        ))}
        <VerseCardSwiperPagination
          verses={verseDetails}
          activeIndex={activeIndex}
        />
      </Swiper>
    </div>
  );
}

export default VerseCardSwiper;
