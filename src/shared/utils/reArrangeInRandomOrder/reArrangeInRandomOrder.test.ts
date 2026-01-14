import { beforeEach } from 'vitest';
import { reArrangeInRandomOrder } from '@shared/utils/reArrangeInRandomOrder/reArrangeInRandomOrder';

let data: number[] = [];
let resultSize = 1;

beforeEach(() => {
  const size = Math.floor(Math.random() * 1000);
  data = Array.from({ length: size }, (_, i) => i + 1);
  resultSize = size - Math.floor(Math.random() * (size - 1));
});

afterEach(() => {
  data = [];
  resultSize = 0;
});

describe('reArrangeInRandomOrder test', () => {
  test('it returns an array of K elements, when K is given as a second argument', () => {
    const result = reArrangeInRandomOrder(data, resultSize);
    expect(result).toHaveLength(resultSize);
  });

  test('every element of result array is in originalArray', () => {
    const result = reArrangeInRandomOrder(data, resultSize);
    result.forEach(verseId => {
      expect(data).toContain(verseId);
    });
  });

  test('every element of result array is unique', () => {
    const result = reArrangeInRandomOrder(data, resultSize);
    const unique = new Set(result);

    expect(unique.size).toBe(result.length);
  });
});
