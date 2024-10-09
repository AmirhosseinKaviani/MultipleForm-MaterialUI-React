import React, { useState} from 'react'
import App from "./App"

export const appContext = React.createContext()
const StepContext = () => {
    const[currentStep,setCurrentStep]= useState(1)
    const[userData,setUserData]= useState([])
    const[finalData,setFinalData]= useState([])
    function submitData(){

    }
  return (
    <div>
        <appContext.Provider value={{currentStep,setCurrentStep,userData,setUserData,finalData,setFinalData,submitData}}>
            <App />
        </appContext.Provider>
      
    </div>
  )
}

export default StepContext
