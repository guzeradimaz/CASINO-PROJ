import {selectUser, setUser} from "../app/features/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const useStorageUserChecker = () => {
    const user = useSelector(selectUser)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const localStorageUser = JSON.parse(localStorage.getItem('user'))
        if (!user.user) {
            if (localStorageUser) {
                dispatch(setUser(localStorageUser))
            } else {
                navigate('/')
            }
        }
    }, []);
}

export default useStorageUserChecker;