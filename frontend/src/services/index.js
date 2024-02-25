import axios from 'axios';
export const getMembers = async () => {
	try {
		const response = await axios.get('/api/member');
		return response.data;
	} catch (error) {
		console.log(error);
	}
}