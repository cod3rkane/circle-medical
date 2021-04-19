import { combineReducers } from 'redux'

import { InitialState } from '@/utils/helpers'

import { AppType } from './ducks/app/types'
import { app } from './ducks'

export type ApplicationState = {
  app: InitialState<AppType>
}

const reducers = combineReducers({ app })

export default reducers
