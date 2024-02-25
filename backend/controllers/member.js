const memberService = require("../services/member");

const getMembers = async (req, res) => {
	try {
		const members = await memberService.getMembers();
		res.status(200).json({ message: "Members fetched successfully", members });
	} catch (error) {
		res.status(400)
	}
};

const addMember = async (req, res) => {
	const { MemberID, MemberName } = req.body;
	try {
		const member = await memberService.addMember(MemberID, MemberName);
		res.status(200).json({ message: "Member added successfully", member });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: "Member not added, something went wrong" })
	}
}

module.exports = { getMembers, addMember };