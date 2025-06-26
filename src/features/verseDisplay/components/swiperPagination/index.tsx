import { VerseDetailDataList } from '@features/verseDisplay/type';
import { useSwiper } from 'swiper/react';
import ReactPaginate from 'react-paginate';
import { FiChevronsLeft } from '@react-icons/all-files/fi/FiChevronsLeft';
import { FiChevronsRight } from '@react-icons/all-files/fi/FiChevronsRight';
import { getShortVerseAddress } from '@utils/common';
import { IoEllipsisHorizontal } from '@react-icons/all-files/io5/IoEllipsisHorizontal';

type SwiperBulletProps = {
  verses: VerseDetailDataList;
  activeIndex: number;
};

function SwiperPagination({ verses, activeIndex }: SwiperBulletProps) {
  const swiper = useSwiper();

  const handleOnClickPagination = (slideIndex: number) => {
    swiper.slideTo(slideIndex);
  };

  return (
    <ReactPaginate
      pageCount={verses.length}
      pageRangeDisplayed={4}
      marginPagesDisplayed={0}
      forcePage={activeIndex}
      onPageChange={({ selected }) => handleOnClickPagination(selected)}
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
          <FiChevronsLeft aria-hidden={true} className='size-10' />
          <span className='text-2xl font-semibold'>처음으로</span>
        </div>
      }
      nextLabel={
        <div className='flex items-center justify-center space-x-1'>
          <span className='text-2xl font-semibold'>끝으로</span>
          <FiChevronsRight aria-hidden={true} className='size-10' />
        </div>
      }
      breakLabel={
        <div className='mt-[50px] flex items-center'>
          <IoEllipsisHorizontal aria-hidden={true} className='size-8' />
          <span className='sr-only'>더 보기</span>
        </div>
      }
      pageLabelBuilder={page => getShortVerseAddress(verses[page - 1])}
      containerClassName='w-[90%] flex items-center justify-center space-x-2 px-8 mt-6 mx-auto'
      pageClassName='swiper-pagination-bullet mt-[55px]'
      activeClassName='swiper-pagination-bullet-active'
      disabledClassName='text-gray-400'
      previousClassName='mr-1 absolute bottom-[70px] left-0 z-100'
      breakClassName='ml-2 text-3xl'
      nextClassName='ml-1 absolute bottom-[70px] right-0'
    />
  );
}

export default SwiperPagination;
