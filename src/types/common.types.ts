export type StoreSelectorMock<T> = <U>(
  state: T extends U ? U : never,
) => U[keyof U];
