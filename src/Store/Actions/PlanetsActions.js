import { Api } from '../../Utils'
import { toast } from 'react-toastify'
import { GetPlanetsTypes } from '../Types'

export const getPlanetsList = () => async (dispatch) => {
  try {
    dispatch({ type: GetPlanetsTypes.start })
    const apiCall = await Api.get('planets/')
    
    if (apiCall.status === 200) {
      dispatch({ type: GetPlanetsTypes.success, planets: apiCall.data.results })
    }
  } catch (e) {
    toast.error(`${e}`)
    dispatch({ type: GetPlanetsTypes.failure, errors: e })
  }
}
