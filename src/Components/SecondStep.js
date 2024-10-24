import React, { useContext } from 'react'
import {Button,TextField} from "@mui/material"
import { appContext } from '../StepContext'

const SecondStep = () => {
  const {setCurrentStep,userData,setUserData}=useContext(appContext)
  return (
    <div>
      <div className="box">
        <div>
         <TextField onChange={(e)=>setUserData({...userData,'Email':e.target.value})} value={userData['Email']} label='Email' variant='outlined' margin='normal' color='secondary'/>
        </div>
        <div>
          <TextField onChange={(e)=>setUserData({...userData,'Country':e.target.value})} value={userData['Country']} label='Country' variant='outlined' margin='normal' color='secondary'/>
        </div>
        <div>
         <TextField onChange={(e)=>setUserData({...userData,'District':e.target.value})} value={userData['District']} label='District' variant='outlined' margin='normal' color='secondary'/>
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
