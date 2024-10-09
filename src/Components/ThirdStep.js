import React, { useContext } from 'react'
import {Button,TextField} from "@mui/material"
import { appContext } from '../StepContext'

const ThirdStep = () => {
  const{setCurrentStep,userData,setUserData,finalData,setFinalData,submitData}=useContext(appContext)
  return (
    <div>
      <div className="box">
        <div>
         <TextField label='City' variant='outlined' margin='normal' color='secondary'/>
        </div>
        <div>
          <TextField label='Landmark' variant='outlined' margin='normal' color='secondary'/>
        </div>
        <div>
         <TextField label='PostalCode' variant='outlined' margin='normal' color='secondary'/>
        </div>
        <div>
         <Button variant='contained' color='secondary' onClick={()=>setCurrentStep(2)}>Back</Button><span> </span>
         <Button variant='contained' color='primary' onClick={submitData}>Submit</Button>
        </div>
    </div>
    </div>
  )
}

export default ThirdStep
