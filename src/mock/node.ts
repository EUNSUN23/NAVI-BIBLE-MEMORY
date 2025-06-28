import { setupServer } from 'msw/node';
import {
  getBibleVerseHandler,
  getCardHideOptionHandler,
  getCardSortMethodsHandler,
  getExamExposeOptionsHandler,
  getExamKorVerseAllByASCHandler,
  getSeriesHandler,
  getSubSeriesHandler,
  getVerseDetailGaeHandler,
  getVerseDetailHandler,
  getVerseSummaryHandler,
} from '@/mock/handler';

export const handlers = [
  getSeriesHandler,
  getSubSeriesHandler,
  getVerseSummaryHandler,
  getBibleVerseHandler,
  getCardHideOptionHandler,
  getVerseDetailHandler,
  getVerseDetailGaeHandler,
  getExamExposeOptionsHandler,
  getCardSortMethodsHandler,
  getExamKorVerseAllByASCHandler,
];

export const server = setupServer(...handlers);
