import './Report.css'
import React, {useRef} from "react";
import {addDoc, collection, doc, getFirestore} from "firebase/firestore";
import {useSelector} from "react-redux";
import {selectUser} from "../../app/features/userSlice";

const Report = ({modalVisible, setModalVisible}) => {
    const handleClose = () => setModalVisible(!modalVisible);
    const textRef = useRef();
    const user = useSelector(selectUser);

    const handleSend = async () => {
        const text = textRef.current.value

        const userRef = doc(getFirestore(), 'users', user.user.id)

        const report = {
            text,
            time: Date.now(),
            userRef
        }

        await addDoc(collection(getFirestore(), 'reports'), report);
        handleClose()
    }

    if (modalVisible)
        return (
            <div className="modalWrapper">
                <div className="modalView">
                    <h1>Сообщить проблему</h1>
                    <textarea ref={textRef} placeholder="Опишите вашу проблему" className="report-textarea"/>
                    <div className="button-wrapper">
                        <button onClick={handleSend}>Отправить</button>
                        <button onClick={handleClose}>Закрыть</button>
                    </div>
                </div>
            </div>
        );
};


export default Report;