import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// const habit = [];
// const length = habit.length;
// for (let i = 0; i < length; i++) {
//   habit[i];
//   console.log(habit);
// }

function createData(
  date: string,
  firstHabit: string,
  secondHabit: string,
  thirdHabit: string,
  fourthHabit: string
) {
  return { date, firstHabit, secondHabit, thirdHabit, fourthHabit };
}

const rows = [
  createData('01/01/2024', 'true', 'true', 'true', 'true'),
  createData('02/01/2024', 'true', 'true', 'true', 'true'),
  createData('03/01/2024', 'true', 'true', 'true', 'true'),
  createData('04/01/2024', 'true', 'true', 'true', 'true'),
  createData('05/01/2024', 'true', 'true', 'true', 'true'),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date </TableCell>
            <TableCell align="right">title 1</TableCell>
            <TableCell align="right">title 2</TableCell>
            <TableCell align="right">title 3</TableCell>
            <TableCell align="right">title 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.firstHabit}</TableCell>
              <TableCell align="right">{row.secondHabit}</TableCell>
              <TableCell align="right">{row.thirdHabit}</TableCell>
              <TableCell align="right">{row.fourthHabit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
