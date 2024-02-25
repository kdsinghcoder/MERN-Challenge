import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function MemberTable({ members }) {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Member Id </TableCell>
						<TableCell align="right">Member Name</TableCell>
						<TableCell align="right">Created At</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{members.map((member) => (
						<TableRow
							key={member._id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{member.MemberID}
							</TableCell>
							<TableCell component="th" scope="row" align='right'>
								{member.MemberName}
							</TableCell>
							<TableCell align="right">{member.createdAt}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}