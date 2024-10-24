import React, { useContext } from 'react'
import {Button,TextField} from "@mui/material"
import { appContext } from '../StepContext'

const FirstStep = () => {
  const {setCurrentStep,userData,setUserData} = useContext(appContext)
  return (
    <div className="box">
        <div>
         <TextField onChange={(e)=>setUserData({...userData,'firstname':e.target.value})} value={userData['firstname']} label='Fisrt Name' variant='outlined' margin='normal' color='secondary'/>
        </div>
        <div>
          <TextField onChange={(e)=>setUserData({...userData,'lastname':e.target.value})} value={userData['lastname']} label='Last Name' variant='outlined' margin='normal' color='secondary'/>
        </div>
        <div>
         <TextField onChange={(e)=>setUserData({...userData,'contactNumber':e.target.value})} value={userData['contactNumber']} label='Contact Number' variant='outlined' margin='normal' color='secondary'/>
        </div>
         <Button variant='contained' color='primary' onClick={()=>setCurrentStep(2)}>Next</Button>
    </div>
  )
}

export default FirstStep
