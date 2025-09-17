import { setupServer } from 'msw/node';
import {
  getBibleVerseHandler,
  getCardHideOptionHandler,
  getExamExposeOptionsHandler,
  getExamKorVerseAllByASCHandler,
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
  getExamKorVerseAllByASCHandler,
];

export const server = setupServer(...handlers);
