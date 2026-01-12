import { useSwiper } from 'swiper/react';
import ReactPaginate from 'react-paginate';
import { FiChevronsLeft } from '@react-icons/all-files/fi/FiChevronsLeft';
import { FiChevronsRight } from '@react-icons/all-files/fi/FiChevronsRight';
import {
  createShortVerseAddress,
  type VerseDetailDataList,
} from '@/entities/verse';
import { useMediaQuery } from 'react-responsive';
import { MAX_MOBILE } from '@/constants/screenSize';

type VerseCardSwiperPaginationProps = {
  verses: VerseDetailDataList;
  activeIndex: number;
};

function VerseCardSwiperPagination({
  verses,
  activeIndex,
}: VerseCardSwiperPaginationProps) {
  const isMobile = useMediaQuery({ query: `(max-width: ${MAX_MOBILE})` });
  const swiper = useSwiper();

  const handleOnChangePagination = (pageIndex: number) => {
    swiper.slideTo(pageIndex);
  };

  return (
    <ReactPaginate
      pageCount={verses.length}
      pageRangeDisplayed={isMobile ? 3 : 4}
      marginPagesDisplayed={0}
      forcePage={activeIndex}
      onPageChange={({ selected }) => handleOnChangePagination(selected)}
      onClick={({ isPrevious, isNext }) => {
        if (isPrevious) {
          swiper.slideTo(0);
          return 0;
        }
        if (isNext) {
          swiper.slideTo(verses.length - 1);
          return verses.length - 1;
        }
      }}
      previousLabel={
        <div className='flex items-center justify-center space-x-1'>
          <FiChevronsLeft
            aria-hidden={true}
            className='size-10 mobile:size-8'
          />
          <span className='sr-only'>처음으로</span>
        </div>
      }
      nextLabel={
        <div className='flex items-center justify-center space-x-1'>
          <span className='sr-only'>끝으로</span>
          <FiChevronsRight
            aria-hidden={true}
            className='size-10 mobile:size-8'
          />
        </div>
      }
      pageLabelBuilder={page => createShortVerseAddress(verses[page - 1])}
      ariaLabelBuilder={page => createShortVerseAddress(verses[page - 1])}
      containerClassName='mt-5 mobile:mt-0 relative flex-wrap h-[100px] w-full mobile:h-[75px] mobile:max-w-[75%] flex items-center justify-center space-x-2 mx-auto mobile:space-x-1'
      pageClassName='w-fit shrink-0 bg-[#37323E] rounded-xl text-[#37323E] mobile:bg-white'
      pageLinkClassName='inline-block text-center text-[22px] bg-[#DEB841] mobile:bg-white font-semibold px-[10px] py-[8px] rounded-xl scale-100 mobile:text-[20px] mobile:px-[6px] mobile:py-0 mobile:font-bold'
      activeLinkClassName='text-white bg-transparent mobile:bg-transparent mobile:text-[#DEB841]'
      disabledLinkClassName='text-[#9CA3AF]'
      previousClassName='mr-2 z-100 mobile:-left-[14%] mobile:absolute'
      breakClassName='hidden'
      nextClassName='ml-2 right-0 mobile:-right-[14%] mobile:absolute'
    />
  );
}

export default VerseCardSwiperPagination;
