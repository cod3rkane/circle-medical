export type SimpleAction<T> = {
  type: string
  payload: T
}

export const simpleAction = <T>(type = '') => (
  payload: any = {}
): SimpleAction<T> => ({
  type,
  payload,
})
