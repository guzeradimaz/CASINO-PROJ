import React, {useState} from "react";
import "./index.css";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, setUser} from "../../app/features/userSlice";
import Report from "../Report/Report";

export const Header = () => {
    const navigate = useNavigate();
    const balance = useSelector((state) => state.user?.user?.balance);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [reportModal, setReportModal] = useState(false)

    const logout = () => {
        dispatch(setUser(null));
        localStorage.removeItem("user");
        navigate("/");
    };

    const openReportModel = () => {
        setReportModal(prev => !prev)
    }

    return (
        <div
            style={{
                width: "100%",
                height: 200,
                marginBottom: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                position: "sticky",
                top: 0,
                backgroundColor: "rgb(17,17,17)",
                zIndex: 1000,
            }}
        >
            <Report modalVisible={reportModal} setModalVisible={setReportModal}/>
            <div
                style={{
                    backgroundImage: `url(https://image.cnbcfm.com/api/v1/image/106901699-1624478603272Resorts-World-Las-Vegas---Casino---Credit-Megan-Blair-jpg?v=1624478654&w=1600&h=900)`,
                    height: 150,
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <div
                style={{
                    height: 100,
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingLeft: 20,
                    paddingRight: 20,
                }}
            >
                <div
                    style={{
                        fontSize: 32,
                        color: "#fff",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                    }}
                >
                    Casino
                </div>


                <div style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}>
                    <div style={{
                        height: "100%",
                        width: "220px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <div style={{color: "#fff", fontSize: 24}}>Balance</div>
                        <div style={{color: "gold", fontSize: 24}}>$ {balance?.toFixed(0)}</div>
                    </div>
                    <Link to={'/admin'}>
                        <button className="button-header"
                                style={{
                                    display: user?.user?.isAdmin ? "" : "none"
                                }}>Панель Админа
                        </button>
                    </Link>
                    <Link to={'/balance'}>
                        <button className="button-header">Пополнить баланс
                        </button>
                    </Link>
                    <button className="button-header"
                            style={{
                                display: !user?.user?.isAdmin ? "" : "none"
                            }}
                            onClick={openReportModel}
                    >Сообщить о проблеме
                    </button>
                    <button className="button-header" onClick={logout}>
                        Выйти
                    </button>
                </div>

            </div>
        </div>
    );
};
