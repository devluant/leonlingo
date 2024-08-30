import React from "react"
import { sessionsCol } from "./firebase"
import { getDocs, addDoc } from "firebase/firestore"

export default function App() {
    const [data, setData] = React.useState({index: 0, lesson: "0-study"})

    getDocs(sessionsCol)
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                setData(doc.data())
            })
        })

    function saveProgress() {
        addDoc(sessionsCol, {
            index: 2,
            lesson: "2-practice"
        })
            .then(docRef => console.log(docRef.id))
            .catch(e => console.error("Error adding doc: ", e))
    }

    return (
        <>
            <h1 className="text-red-500">Hello 🦁</h1>
            <p>{data.index}</p>
            <p>{data.lesson}</p>
            <button onClick={saveProgress}>Save progress</button>
        </>
    )
}