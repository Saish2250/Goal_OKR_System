import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  adminlogintrigger : false,
  adminloginsuccess : {},
  adminloginerror : {},
  signuptrigger : false,
  signupsuccess : {},
  signuperror : {},
  getTeamsSuccess : []
}

export const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setadminlogintrigger: (state, action) => {
      return {
        ...state,
        adminlogintrigger : action.payload
      }
    },
    setadminloginerror: (state, action) => {
      return {
        ...state,
        adminloginerror : action.payload
      }
    },
    setadminloginsuccess: (state, action) => {
      return {
        ...state,
        adminloginsuccess : action.payload
      }
    },
    setsignuptrigger: (state, action) => {
      return {
        ...state,
        signuptrigger : action.payload
      }
    },
    setsignuperror: (state, action) => {
      return {
        ...state,
        signuperror : action.payload
      }
    },
    setsignupsuccess: (state, action) => {
      return {
        ...state,
        signupsuccess : action.payload
      }
    },
    setGetTeamsSuccess: (state, action) => {
      return {
        ...state,
        getTeamsSuccess : action.payload
      }
    },
  },
})

export const { 
  setadminlogintrigger, 
  setadminloginerror, 
  setadminloginsuccess,
  setsignuptrigger,
  setsignuperror,
  setsignupsuccess,
  setGetTeamsSuccess
} = app.actions

export default app.reducer