import React, {useState} from 'react'
import {GeneralContainer, Wrapper} from "./Menu.elements"
import Properties from "../Properties/Properties"
import Rings from "../Ring/Ring"
import Futer from "../Futer/Futer"

const Menu = () => {
    const [currentRotateOne, setCurrentRotateOne] = useState(0)
    const [currentRotateTwo, setCurrentRotateTwo] = useState(0)
    const [currentRotateThree, setCurrentRotateThree] = useState(0)
    const [currentRotateFour, setCurrentRotateFour] = useState(0)
    return (
        <div>
            <GeneralContainer>
                <Wrapper>
                    <Properties
                        setCurrentRotateOne={setCurrentRotateOne}
                        setCurrentRotateTwo={setCurrentRotateTwo}
                        setCurrentRotateThree={setCurrentRotateThree}
                        setCurrentRotateFour={setCurrentRotateFour}
                        currentRotateOne={currentRotateOne}
                        currentRotateTwo={currentRotateTwo}
                        currentRotateThree={currentRotateThree}
                        currentRotateFour={currentRotateFour}
                    />
                    <Rings
                        currentRotateOne={currentRotateOne}
                        currentRotateTwo={currentRotateTwo}
                        currentRotateThree={currentRotateThree}
                        currentRotateFour={currentRotateFour}
                    />
                </Wrapper>
            </GeneralContainer>
            <Futer/>
        </div>
    )
}

export default Menu