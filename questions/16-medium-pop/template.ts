// solved

type Pop<T extends any[]> = T extends [...infer X, infer Z] ? X : never;
