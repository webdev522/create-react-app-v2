import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
// import { pender } from 'redux-pender'
// import * as AuthAPI from 'lib/api/auth'

// action types
const INITIALIZE = 'template/INITIALIZE'
const SET_ERROR = 'template/SET_ERROR'
// const SUBMIT = 'template/SUBMIT'
const SET_PENDING = 'template/SET_PENDING'
const SET_RESULT = 'template/SET_RESULT'

export const actionCreators = {
  initialize: createAction(INITIALIZE),
  setError: createAction(SET_ERROR),
  // submit: createAction(SUBMIT, AuthAPI.check),
  setPending: createAction(SET_PENDING),
  setResult: createAction(SET_RESULT)
}

// initial state
const initialState = {
  error: '',
  pending: false,
  result: null
}

export default handleActions(
  {
    [INITIALIZE]: state => {
      return produce(state, draft => {
        draft.error = ''
        draft.pending = false
        draft.result = null
      })
    },
    [SET_ERROR]: (state, action) => {
      return produce(state, draft => {
        draft.error = action.payload
      })
    },
    [SET_PENDING]: (state, action) => {
      return produce(state, draft => {
        draft.pending = action.payload
      })
    },
    [SET_RESULT]: (state, action) => {
      return produce(state, draft => {
        draft.result = action.payload
      })
    }
    // ...pender({
    //   type: SUBMIT,
    //   onSuccess: (state, action) => {
    //     return produce(state, draft => {
    //       draft.result = action.payload.data
    //     })
    //   },
    //   onFailure: (state, action) => {
    //     const { status, data } = action.payload.response
    //     return produce(state, draft => {
    //       draft.result = status
    //       draft.error = data
    //     })
    //   }
    // })
  },
  initialState
)
