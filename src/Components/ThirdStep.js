import React, { useContext } from 'react'
import {Button,TextField} from "@mui/material"
import { appContext } from '../StepContext'

const ThirdStep = () => {
  const{setCurrentStep,userData,setUserData,finalData,setFinalData,submitData}=useContext(appContext)
  return (
    <div>
      <div className="box">
        <div>
         <TextField onChange={(e)=>setUserData({...userData,'City':e.target.value})} value={userData['City']} label='City' variant='outlined' margin='normal' color='secondary'/>
        </div>
        <div>
          <TextField onChange={(e)=>setUserData({...userData,'Landmark':e.target.value})} value={userData['Landmark']} label='Landmark' variant='outlined' margin='normal' color='secondary'/>
        </div>
        <div>
         <TextField onChange={(e)=>setUserData({...userData,'PostalCode':e.target.value})} value={userData['PostalCode']} label='PostalCode' variant='outlined' margin='normal' color='secondary'/>
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
