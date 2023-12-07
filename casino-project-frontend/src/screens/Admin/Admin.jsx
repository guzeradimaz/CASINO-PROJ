import useStorageUserChecker from "../../hooks/useStorageUserChecker";
import {ArrowBackLine} from "../../components/ArrowBackLine/ArrowBackLine";

export const Admin = () => {

    useStorageUserChecker()

    const buttonStyle = {width: "450px", height: "80px"}

    return (
        <div style={{
            height: "100vh",
            background: "rgb(17, 17, 17)"
        }}>
            <ArrowBackLine/>
            <div style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <button className="button-header" style={buttonStyle}>
                    Показать статистику пользователей
                </button>
                <button className="button-header" style={buttonStyle}>
                    Управление слотами
                </button>
            </div>
        </div>
    )
}