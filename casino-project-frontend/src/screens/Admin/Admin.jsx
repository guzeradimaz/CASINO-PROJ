import useStorageUserChecker from "../../hooks/useStorageUserChecker";
import {ArrowBackLine} from "../../components/ArrowBackLine/ArrowBackLine";
import {TableData} from "./components/TableData";
import {useState} from "react";
import {collection, getDoc, getDocs, getFirestore} from "firebase/firestore";

export const Admin = () => {

    useStorageUserChecker()

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
                    time: new Date(data.time).toString()
                })
            }
        ))
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
                    time: new Date(data.time).toString()
                })
            }
        ))
        setStatistics(statistics)
        setShowStatistics(prev => !prev)
    }


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