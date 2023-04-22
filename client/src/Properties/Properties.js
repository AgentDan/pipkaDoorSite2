import React from 'react'
import {PropertiesContainer, PropertiesWrapper} from "./Properties.element"
import Gem from "./Options/Gem/Gem"

const Properties = ({
                        setCurrentRotateOne,
                        setCurrentRotateTwo,
                        setCurrentRotateThree,
                        setCurrentRotateFour,
                        setCurrentFutNumber,
                        setCurrentPathProject,
                        currentRotateOne,
                        currentRotateTwo,
                        currentRotateThree,
                        currentRotateFour,
                        currentFutNumber,
                        currentPathProject
                    }) => {
    return (
        <PropertiesContainer>
            <PropertiesWrapper>
                <div>
                    <Gem
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
                </div>
            </PropertiesWrapper>
        </PropertiesContainer>
    )
}

export default Properties