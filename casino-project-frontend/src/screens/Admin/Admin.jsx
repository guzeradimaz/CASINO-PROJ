import useStorageUserChecker from "../../hooks/useStorageUserChecker";
import {ArrowBackLine} from "../../components/ArrowBackLine/ArrowBackLine";
import {TableData} from "./components/TableData";
import {useEffect, useState} from "react";
import {collection, getDoc, getDocs, getFirestore} from "firebase/firestore";
import {getDateTimeString} from "../../utils/DateTime";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const Admin = () => {
    useStorageUserChecker()
    const navigate = useNavigate()
    const isAdmin = useSelector(state => state.user?.user?.isAdmin)

    useEffect(() => {
        if (!isAdmin) {
            navigate('/home')
        }
    }, []);

    const [showReports, setShowReports] = useState(false)
    const [showStatistics, setShowStatistics] = useState(false)
    const [reports, setReports] = useState([])
    const [statistics, setStatistics] = useState([])


    const onShowReports = async () => {
        if (showReports) {
            setShowReports(prev => !prev)
            return
        }
        const querySnapshot = await getDocs(collection(getFirestore(), 'reports'));
        const reports = []

        await Promise.all(querySnapshot.docs.map(async doc => {
                const data = doc.data()
                const user = await getDoc(data.userRef)
                const userData = user.data()
                reports.push({
                    userName: userData.displayName,
                    email: userData.email,
                    text: data.text,
                    time: getDateTimeString(data.time)
                })
            }
        ))
        // reports.sort((a, b) => Date.parse(a.time) - Date.parse(b.time))
        setReports(reports)
        setShowReports(prev => !prev)
    }

    const onShowStatistics = async () => {
        if (showStatistics) {
            setShowStatistics(prev => !prev)
            return
        }
        const querySnapshot = await getDocs(collection(getFirestore(), 'statistics'));
        const statistics = []

        await Promise.all(querySnapshot.docs.map(async doc => {
                const data = doc.data()
                const user = await getDoc(data.userRef)
                const userData = user.data()
                statistics.push({
                    userName: userData.displayName,
                    email: userData.email,
                    game: data.game,
                    win: data.win.toString(),
                    income: data.income,
                    time: getDateTimeString(data.time)
                })
            }
        ))
        // statistics.sort((a, b) => Date.parse(a.time) - Date.parse(b.time))
        setStatistics(statistics)
        setShowStatistics(prev => !prev)
    }


    const buttonStyle = {width: "25%", height: "80px"}

    return (
        <div style={{
            // minHeight: "100%",
            height: "100%",
            background: "rgb(17, 17, 17)"
        }}>
            <ArrowBackLine/>
            <div style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <button className="button-header" style={buttonStyle} onClick={() => onShowStatistics()}>
                    Показать статистику пользователей
                </button>
                <button className="button-header" style={buttonStyle} onClick={() => onShowReports()}>
                    Показать жалобы пользователей
                </button>
                <button disabled className="button-header" style={buttonStyle}>
                    Управление слотами
                </button>
            </div>
            {showStatistics && <TableData data={statistics} name="Статистика пользовательских игр"/>}
            {showReports && <TableData data={reports} name="Жалобы пользователей"/>}
        </div>
    )
}