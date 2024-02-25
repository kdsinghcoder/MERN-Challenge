import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateMembers } from '../slice/index'
import MemberTable from '../components/MemberTable'
import { getMembers } from '../services'

function Members() {
	const members = useSelector((state) => state.members)
	const dispatch = useDispatch();

	const getMemberData = async () => {
		try {
			const response = await getMembers();
			dispatch(updateMembers(response.data))
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		getMemberData();
	}, [])

	if (!members) {
		return <div>Loading...</div>
	}
	return (
		<>
			<MemberTable members={members} />
		</>
	)
}

export default Members