import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BooksTable({ books }) {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Boot ID</TableCell>
						<TableCell align="right">Name</TableCell>
						<TableCell align="right">Copies</TableCell>
						<TableCell align="right">Available</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{books.map((book) => (
						<TableRow
							key={book._id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{book.BookID}
							</TableCell>
							<TableCell align="right">{book.BookName}</TableCell>
							<TableCell align="right">{book.NumberOfCopies}</TableCell>
							<TableCell align="right">{book.AvailableCopies}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}