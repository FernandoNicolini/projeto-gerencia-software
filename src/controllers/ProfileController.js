const ProfileService = require('../services/ProfileService');

class ProfileController {
    async deposit(req, res) {
        try {
            const { profileId } = req.params;
            const { amount } = req.body;

            const updatedProfile = await ProfileService.deposit(profileId, amount);
            res.json({ success: true, balance: updatedProfile.balance });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new ProfileController();
