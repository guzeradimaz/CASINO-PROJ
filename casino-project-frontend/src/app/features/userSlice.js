import {createSlice} from '@reduxjs/toolkit'
import {doc, getFirestore, setDoc} from "firebase/firestore";
import {pushStatistic} from "../../utils/DB";

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
            const income = action.payload.income
            const game = action.payload.game
            state.user.balance += income
            const id = state.user.id
            try {
                const docRef = doc(getFirestore(), 'users', id)
                setDoc(docRef, state.user)
                pushStatistic(state.user, income, game)
            } catch (e) {
                console.log(e)
            }

        }
    }
})

export const {setUser, changeBalance} = userSlice.actions
export const selectUser = (state) => state.user
export default userSlice.reducer