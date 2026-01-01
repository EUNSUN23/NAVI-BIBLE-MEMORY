import { setupServer } from 'msw/node';
import {
  getBibleVerseHandler,
  getCardHideOptionHandler,
  getExamExposeOptionsHandler,
  getSeriesHandler,
  getSubSeriesHandler,
  getVerseDetailGaeHandler,
  getVerseDetailHandler,
  getVerseSummaryHandler,
} from '@/msw/handler';

export const handlers = [
  getSeriesHandler,
  getSubSeriesHandler,
  getVerseSummaryHandler,
  getBibleVerseHandler,
  getCardHideOptionHandler,
  getVerseDetailHandler,
  getVerseDetailGaeHandler,
  getExamExposeOptionsHandler,
];

export const server = setupServer(...handlers);
