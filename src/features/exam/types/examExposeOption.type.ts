import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';
import { getExamExposeOptions } from '@features/examConfig/api/getExamExposeOptions';

export type ExamExposeOptionList = ApiResultType<typeof getExamExposeOptions>;
export type ExamExposeOption = ArrayElement<ExamExposeOptionList>;
