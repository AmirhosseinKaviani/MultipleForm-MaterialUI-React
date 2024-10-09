import React, { useContext } from 'react'
import {Button,TextField} from "@mui/material"
import { appContext } from '../StepContext'

const SecondStep = () => {
  const {setCurrentStep}=useContext(appContext)
  return (
    <div>
      <div className="box">
        <div>
         <TextField label='Email' variant='outlined' margin='normal' color='secondary'/>
        </div>
        <div>
          <TextField label='Country' variant='outlined' margin='normal' color='secondary'/>
        </div>
        <div>
         <TextField label='District' variant='outlined' margin='normal' color='secondary'/>
        </div>
        <div>
         <Button variant='contained' color='secondary' onClick={()=>setCurrentStep(1)}>back</Button><span> </span>
         <Button variant='contained' color='primary' onClick={()=>setCurrentStep(3)}>Next</Button>
        </div>
    </div>
    </div>
  )
}

export default SecondStep
