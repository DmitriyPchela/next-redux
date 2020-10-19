import { GetPlanetsTypes } from '../Types'

const initialState = {
  planets: [],
  isLoaded: false,
  isStartLoad: false
}

export const PlanetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetPlanetsTypes.start:
      return {
        ...state,
        isStartLoad: true
      }
    case GetPlanetsTypes.success:
      return {
        ...state,
        isLoaded: true,
        isStartLoad: false,
        planets: action.planets
      }
    case GetPlanetsTypes.failure:
      return {
        ...state,
        isStartLoad: false,
        errors: action.errors
      }
    default:
      return state
  }
}
