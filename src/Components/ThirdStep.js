import React from 'react'
import {Button,TextField} from "@mui/material"

const ThirdStep = () => {
  return (
    <div>
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
         <Button variant='contained' color='primary'>Next</Button>
    </div>
    </div>
  )
}

export default ThirdStep
