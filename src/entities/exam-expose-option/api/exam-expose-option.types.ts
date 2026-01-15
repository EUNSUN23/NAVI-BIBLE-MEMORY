import { ApiResultType } from '@shared/types/api-result.type';
import { ArrayElement } from '@shared/types/array-element.type';
import { getExamExposeOptions } from './get-exam-expose-options';

export type ExamExposeOptionList = ApiResultType<typeof getExamExposeOptions>;
export type ExamExposeOption = ArrayElement<ExamExposeOptionList>;
