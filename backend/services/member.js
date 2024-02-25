const memberModel = require('../models/members');

const getMembers = async (query) => {
	const members = await memberModel.find(query);
	return members;
};

const addMember = async (MemberID, MemberName) => {
	const member = new memberModel({ MemberID, MemberName });
	await member.save();
	return member;
}

module.exports = { getMembers, addMember };