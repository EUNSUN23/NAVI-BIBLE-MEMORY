import { ApiResultType } from '@shared/api/api-result.type';
import { ArrayElement } from '@shared/lib/array-element.type';
import { getExamExposeOptions } from './get-exam-expose-options';

export type ExamExposeOptionList = ApiResultType<typeof getExamExposeOptions>;
export type ExamExposeOption = ArrayElement<ExamExposeOptionList>;
