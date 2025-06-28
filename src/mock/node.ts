import { setupServer } from 'msw/node';
import {
  getBibleVerseHandler,
  getCardHideOptionHandler,
  getCardSortMethodsHandler,
  getExamExposeOptionsHandler,
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
];

export const server = setupServer(...handlers);
