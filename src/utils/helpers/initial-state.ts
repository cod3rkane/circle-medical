export type InitialState<T> = {
  data: T
  error: boolean
  loading: boolean
}

export const makeInitialState = <T>(data: any = {}): InitialState<T> => ({
  data,
  error: false,
  loading: false,
})
