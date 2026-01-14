import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';
import { getExamExposeOptions } from './get-exam-expose-options';

export type ExamExposeOptionList = ApiResultType<typeof getExamExposeOptions>;
export type ExamExposeOption = ArrayElement<ExamExposeOptionList>;
