import React, {useState, useContext, useCallback, useEffect} from "react"
import {OptionGemContainer, OptionGemDetails} from "./Gem.elements"
import axios from "axios"

const Gem = ({
                 setCurrentRotateOne,
                 setCurrentRotateTwo,
                 setCurrentRotateThree,
                 setCurrentRotateFour,
                 currentRotateOne,
                 currentRotateTwo,
                 currentRotateThree,
                 currentRotateFour,
             }) => {

    const userId = "6435a2c19bdc5fcf5e235cf3"
    const [myKey, setMyKey] = useState([])

    const pushKeyParamA = (variation) => {
        setCurrentRotateOne(variation)
    }

    const pushKeyParamB = (variation) => {
        setCurrentRotateTwo(variation)
    }

    const pushKeyParamC = (variation) => {
        setCurrentRotateThree(variation)
    }

    const pushKeyParamD = (variation) => {
        setCurrentRotateFour(variation)
    }

    const getKey = useCallback(async () => {
        try {
            await axios.get('/api/main/post', {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {userId}
            })
                .then((response) => setMyKey(response.data))

        } catch (error) {
            console.log(error)
        }
    }, [userId])

    useEffect(() => {
        getKey()
    }, [getKey])

    return (
        <OptionGemContainer>
            {
                myKey.map((todo, index) => {
                    return (
                        <div key={index}>
                            {
                                todo ?
                                    <div className="flex flex-wrap mt-8">

                                        <div className="flex flex-wrap">
                                            {
                                                todo.paramA.map((todoOne, index) => {
                                                    return (
                                                        <div key={index}>
                                                            {currentRotateOne === index ?
                                                                <button
                                                                    className="w-24 h-12 m-2 text-xs bg-gray-500 hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                                                    {todoOne}
                                                                </button>
                                                                :
                                                                <button
                                                                    onClick={() => pushKeyParamA(index)}
                                                                    className="w-24 h-12 m-2 text-xs bg-transparent hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                                                    {todoOne}
                                                                </button>
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                        <div className="flex flex-wrap">
                                            {
                                                todo.paramB.map((todoTwo, index) => {
                                                    return (
                                                        <div key={index}>
                                                            {currentRotateTwo === index ?
                                                                <button
                                                                    className="w-24 h-12 m-2 text-xs bg-gray-500 hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                                                    {todoTwo}
                                                                </button>
                                                                :
                                                                <button
                                                                    onClick={() => pushKeyParamB(index)}
                                                                    className="w-24 h-12 m-2 text-xs bg-transparent hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                                                    {todoTwo}
                                                                </button>
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                        <div className="flex flex-wrap">
                                            {
                                                todo.paramC.map((todoThree, index) => {
                                                    return (
                                                        <div key={index}>
                                                            {currentRotateThree === index ?
                                                                <button
                                                                    className="w-24 h-12 m-2 text-xs bg-gray-500 hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                                                    {todoThree}
                                                                </button>
                                                                :
                                                                <button
                                                                    onClick={() => pushKeyParamC(index)}
                                                                    className="w-24 h-12 m-2 text-xs bg-transparent hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                                                    {todoThree}
                                                                </button>
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                        <div className="flex flex-wrap">
                                            {
                                                todo.paramD.map((todoFour, index) => {
                                                    return (
                                                        <div key={index}>
                                                            {currentRotateFour === index ?
                                                                <button
                                                                    className="w-24 h-12 m-2 text-xs bg-gray-500 hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                                                    {todoFour}
                                                                </button>
                                                                :
                                                                <button
                                                                    onClick={() => pushKeyParamD(index)}
                                                                    className="w-24 h-12 m-2 text-xs bg-transparent hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                                                    {todoFour}
                                                                </button>
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                    :
                                    <></>
                            }
                        </div>
                    )
                })
            }
        </OptionGemContainer>
    )
}

export default Gem
