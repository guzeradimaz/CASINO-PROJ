import React, {useEffect} from "react";
import {TabList} from "./components/TabList/TabList";
import {Header} from "../../components/Header/Header";
import {Infos} from "./components/Infos/Infos";
import {Overview} from "./components/Overview/Overview";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUser} from "../../app/features/userSlice";

export const Home = () => {

    const user = useSelector(selectUser)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user.user) {
            navigate('/')
        }
    }, [])

    return (
        <div style={{
            backgroundColor: 'rgb(17,17,17)'
        }}>
            <Header/>
            <TabList/>
            <Overview/>
            <Infos/>
        </div>
    );
};
