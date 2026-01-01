import { ApplicationError } from '@/shared/utils/ApplicationError';

export const reArrangeInRandomOrder = <T>(data: T[], size?: number): T[] => {
  const maxSize = data.length;

  if (maxSize < 1)
    throw new ApplicationError('The original size must be greater than 0');

  if (typeof size !== 'undefined') {
    if (size > maxSize)
      throw new ApplicationError(
        'The result size must be smaller than the original size',
      );
    if (size < 1)
      throw new ApplicationError('The result size must be greater than 0');
  }

  const randomIndexes = Array.from({ length: data.length }, (_, i) => i + 1);
  for (let i = randomIndexes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomIndexes[i], randomIndexes[j]] = [randomIndexes[j], randomIndexes[i]];
  }

  const result = randomIndexes.map(index => data[index - 1]);
  return typeof size === 'number' ? result.slice(0, size) : result;
};
