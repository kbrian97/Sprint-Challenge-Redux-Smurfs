import {
  FETCH_SMURFS,
  SUCCESS,
  FAILURE,
  POST_SMURF
} from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/
  const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    error: null,
    editing: false,
  }

  export const Reducer = (state = initialState, action) => {
    switch (action.type){
      case FETCH_SMURFS:
        return {
          ...state,
          fetchingSmurfs: true
        }

      case SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: [...action.payload]
      }

      case FAILURE:
        return {
          ...state,
          fetchingSmurfs: false,
          error: action.payload
        }

      default:
      return state;
    }
  }
