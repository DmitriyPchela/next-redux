import { combineReducers } from 'redux'
import { PlanetsReducer } from './PlanetsReducer'

export default combineReducers({
  PlanetsStore: PlanetsReducer
})
