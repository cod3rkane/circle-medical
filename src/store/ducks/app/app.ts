import produce from 'immer'
import { Dispatch } from 'redux'

import { simpleAction, SimpleAction, makeInitialState } from '@/utils/helpers'
import { AppType, AppActionResult } from './types'
// import { ServiceName } from '@/services/'

export const APP_REQUEST = '@app/APP_REQUEST'
export const APP_SUCCESS = '@app/APP_SUCCESS'
export const APP_FAILURE = '@app/APP_FAILURE'

export const initialState = makeInitialState<AppType>({
  items: [],
})

export default function reducer(
  state = initialState,
  action: SimpleAction<AppActionResult>
): any {
  return produce(state, (draft) => {
    switch (action.type) {
      case APP_REQUEST: {
        draft.error = false
        draft.loading = true
        break
      }
      case APP_SUCCESS: {
        draft.loading = false
        break
      }
      case APP_FAILURE: {
        draft.error = true
        draft.loading = false
        break
      }
      default:
    }
  })
}

export const appRequest = simpleAction(APP_REQUEST)
export const appSuccess = simpleAction(APP_SUCCESS)
export const appFailure = simpleAction(APP_FAILURE)

export const searchAction = (query: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch(appRequest())

  try {
    // const payload = await ServiceName(query)

    dispatch(appSuccess([]))
  } catch {
    dispatch(appFailure())
  }
}
