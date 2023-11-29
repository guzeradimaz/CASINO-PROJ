import {createSlice} from '@reduxjs/toolkit'
import * as db from "@firebase/firestore";
import {doc, getFirestore, setDoc} from "firebase/firestore";

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
            console.log(state.user)

            state.user.balance += action.payload
            const id = state.user.id
            try {
                const docRef = doc(getFirestore(), 'users', id)
                setDoc(docRef, state.user)
            } catch (e) {
                console.log(e)
            }

        }
    }
})

export const {setUser, changeBalance} = userSlice.actions
export const selectUser = (state) => state.user
export default userSlice.reducer