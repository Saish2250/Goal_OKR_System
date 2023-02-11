import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  adminlogintrigger : false,
  adminloginsuccess : {},
  adminloginerror : {}
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
  },
})

export const { setadminlogintrigger, setadminloginerror, setadminloginsuccess } = app.actions

export default app.reducer