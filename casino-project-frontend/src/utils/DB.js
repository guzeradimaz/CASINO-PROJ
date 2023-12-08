import {addDoc, collection, doc, getFirestore} from "firebase/firestore";

export const pushStatistic = (user, income, game) => {
    const userRef = doc(getFirestore(), 'users', user.id)
    const report = {
        win: income > 0,
        income,
        game,
        time: Date.now(),
        userRef
    }

    addDoc(collection(getFirestore(), 'statistics'), report);
}