import React, { useContext } from 'react'
import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table } from '@mui/material'
import {appContext} from "../StepContext"

const DisplayData = () => {
    const {finalData} = useContext(appContext)
  return (
    <div>
        <TableContainer  stayle={{display:'flex',justifyContent:'center'}}>
        <Table border='1' stayle={{width:'70%',justifyContent:"center"}} size='small' aria-label='caption table'>
        <TableHead>
            <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Contact Number</TableCell>
                <TableCell>Email Address</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>District</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Landmark</TableCell>
                <TableCell>Postal Code</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                finalData.map((data)=>(
                    <TableRow key={data.Email}>
                        <TableCell>{data.firstname}</TableCell>
                        <TableCell>{data.lastname}</TableCell>
                        <TableCell>{data.contactNumber}</TableCell>
                        <TableCell>{data.Email}</TableCell>
                        <TableCell>{data.Country}</TableCell>
                        <TableCell>{data.District}</TableCell>
                        <TableCell>{data.City}</TableCell>
                        <TableCell>{data.Landmark}</TableCell>
                        <TableCell>{data.PostalCode}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
        </TableContainer>
    </div>
  )
}

export default DisplayData
