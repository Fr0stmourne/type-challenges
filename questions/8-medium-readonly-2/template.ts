// solved

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [Z in K]: T[Z];
} & Omit<T, K>
