import { Description } from "@mui/icons-material";
import {  Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export function Maincategories(){
    const [categories,setCategories]=useState([
        {
            id :1,
            category:"Transform",
            Description:"TRF",
            Createdat:  "4 march 2024"

        },
        {
            id :2,
            category:"LED",
            Description:"led",
            Createdat:"5 march 2024"

        }
    ])
    return <div>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Categories</TableCell>
            <TableCell >Description</TableCell>
            <TableCell >Created At</TableCell>
            <TableCell >Actions</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell >{row.Description}</TableCell>
              <TableCell >{row.Createdat}</TableCell>
              <TableCell >
                <EditIcon></EditIcon>
                <DeleteIcon></DeleteIcon>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
}