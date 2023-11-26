import {createSlice} from '@reduxjs/toolkit'

const UserInit = {
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState: UserInit,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        changeBalance: (state, action) => {
            state.user.balance += action.payload
        }
    }
})

export const {setUser, changeBalance} = userSlice.actions
export const selectUser = (state) => state.user
export default userSlice.reducer