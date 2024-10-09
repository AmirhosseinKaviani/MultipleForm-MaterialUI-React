import React, { useContext } from 'react'
import {Button,TextField} from "@mui/material"
import { appContext } from '../StepContext'

const FirstStep = () => {
  const {setCurrentStep} = useContext(appContext)
  return (
    <div className="box">
        <div>
         <TextField label='Fisrt Name' variant='outlined' margin='normal' color='secondary'/>
        </div>
        <div>
          <TextField label='Last Name' variant='outlined' margin='normal' color='secondary'/>
        </div>
        <div>
         <TextField label='Contact Number' variant='outlined' margin='normal' color='secondary'/>
        </div>
         <Button variant='contained' color='primary' onClick={()=>setCurrentStep(2)}>Next</Button>
    </div>
  )
}

export default FirstStep
