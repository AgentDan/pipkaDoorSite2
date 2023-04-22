import React, {useState, useEffect, useCallback, useContext} from 'react'
import axios from "axios"

const Futer = ({
                   setCurrentFutNumber,
                   setCurrentPathProject,
                   currentFutNumber,
                   currentPathProject
               }) => {
    const userId = "6435a2c19bdc5fcf5e235cf3"
    const [futerName, setFuterName] = useState([])

    const clickName = (num) => {
        setCurrentFutNumber(num)
        console.log("Future: ", currentFutNumber)
    }

    const getKey = useCallback(async () => {
        try {
            await axios.get('/api/main/post', {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {userId}
            })
                .then((response) => setFuterName(response.data))

        } catch (error) {
            console.log(error)
        }
    }, [userId])

    useEffect(() => {
        getKey()
    }, [getKey])

    return (
        <div>
            < div className="flex justify-center bg-gray-100 ">
                <div className="absolute bottom-6">
                    <div className="flex justify-center bg-gray-100 rounded-lg opacity-75">
                        {futerName.map((name, index) => {
                            return (
                                <div key={index}>
                                    <button
                                        onClick={() => clickName(index)}
                                        className="rounded-lg text-gray-800 text-center bg-gray-300 px-4 py-2 m-2 hover:bg-gray-700 hover:text-white">
                                        {name.title}
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                < /div>
            < /div>
        < /div>
    )
}

export default Futer