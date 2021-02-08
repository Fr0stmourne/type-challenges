// solved

type TupleToUnion<T> = T extends [...infer S] ? S[number] : never
