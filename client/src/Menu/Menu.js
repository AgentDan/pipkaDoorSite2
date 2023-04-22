import React, {useState, useCallback, useEffect} from 'react'
import {GeneralContainer, Wrapper} from "./Menu.elements"
import Properties from "../Properties/Properties"
import Rings from "../Ring/Ring"
import Futer from "../Futer/Futer"
import axios from "axios";

const Menu = () => {
    const [currentRotateOne, setCurrentRotateOne] = useState(0)
    const [currentRotateTwo, setCurrentRotateTwo] = useState(0)
    const [currentRotateThree, setCurrentRotateThree] = useState(0)
    const [currentRotateFour, setCurrentRotateFour] = useState(0)
    const [currentFutNumber, setCurrentFutNumber] = useState(0)
    const [currentPathProject, setCurrentPathProject] = useState("")
    const [arrayProject, setArrayProject] = useState([])

    const userId = "6435a2c19bdc5fcf5e235cf3"
    const getKey = useCallback(async () => {
        try {
            await axios.get('/api/main/post', {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {userId}
            })
                .then((response) => setArrayProject(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [userId])

    useEffect(() => {
        getKey()
    }, [getKey])

    return (
        <div>
            <GeneralContainer>
                <Wrapper>
                    <Properties
                        setCurrentRotateOne={setCurrentRotateOne}
                        setCurrentRotateTwo={setCurrentRotateTwo}
                        setCurrentRotateThree={setCurrentRotateThree}
                        setCurrentRotateFour={setCurrentRotateFour}
                        setCurrentFutNumber={setCurrentFutNumber}
                        setCurrentPathProject={setCurrentPathProject}
                        currentRotateOne={currentRotateOne}
                        currentRotateTwo={currentRotateTwo}
                        currentRotateThree={currentRotateThree}
                        currentRotateFour={currentRotateFour}
                        currentFutNumber={currentFutNumber}
                        currentPathProject={currentPathProject}
                    />
                    <Rings
                        currentRotateOne={currentRotateOne}
                        currentRotateTwo={currentRotateTwo}
                        currentRotateThree={currentRotateThree}
                        currentRotateFour={currentRotateFour}
                        currentFutNumber={currentFutNumber}
                        currentPathProject={currentPathProject}
                    />
                </Wrapper>
            </GeneralContainer>
            <Futer
                setCurrentFutNumber={setCurrentFutNumber}
                setCurrentPathProject={setCurrentPathProject}
                currentFutNumber={currentFutNumber}
                currentPathProject={currentPathProject}
            />
        </div>
    )
}

export default Menu