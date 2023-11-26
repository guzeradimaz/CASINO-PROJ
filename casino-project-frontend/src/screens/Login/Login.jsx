import React from "react";
import {useNavigate} from "react-router-dom";
import {signInWithGooglePopup} from "../../utils/firebase";
import "./Login.css";
import {useDispatch} from "react-redux";
import {setUser} from "../../app/features/userSlice";

export const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
        if (response?.user) {
            const user = response.user
            const newUser = {
                displayName: user.displayName,
                email: user.email,
                photo: user.photoURL,
                id: user.uid,
                balance: 1000
            }

            dispatch(setUser(newUser))
            localStorage.setItem('user', JSON.stringify(newUser))
            navigate("/home")
        }
    }
    return (
        <div className={"login-wrapper"}>
            <div className={"caption"}>Выберите любой способ входа</div>
            <button className={"google-login"} onClick={logGoogleUser}>Войти с Google</button>
        </div>
    );
};
