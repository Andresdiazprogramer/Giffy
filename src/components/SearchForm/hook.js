import {useReducer} from 'react'

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RAITING: 'update_rating'
  }
  
  const ACTIONS_REDUCERS = {
    [ACTIONS.UPDATE_KEYWORD]: (state, action) =>({
        ...state,
        keyword: action.payload,
        times: state.times +1
    }), 
    [ACTIONS.UPDATE_RAITING]: (state, action) =>({
      ...state,
      rating: action.payload,
      times: state.times +1
  })
  }
  const reducer = (state, action) => {
    const actionReducer = ACTIONS_REDUCERS[action.type];
    return actionReducer ? actionReducer(state, action) : state;
  };
  
   export default function useForm  ({
        initialKeyword ='',
        initialRating= 'g'
    } = {}) {
    const [state,dispatch] =useReducer(reducer, {
      keyword: decodeURIComponent(initialKeyword),
      rating: initialRating,
      times: 0
    })
  
    const {keyword,rating,times} = state
  
    return{
      keyword,
      rating,
      times,
      updateKeyword: keyword => 
      dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword}),
      updateRating: rating => dispatch({type: ACTIONS.UPDATE_RAITING, payload: rating})
    }
  }