// solved

type DeepReadonly<T extends Object> = T extends object ? T extends Function ? T : {
  readonly [K in keyof T]: DeepReadonly<T[K]>
} : T;
