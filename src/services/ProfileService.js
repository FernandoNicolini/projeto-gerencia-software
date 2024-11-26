const ProfileRepository = require('../repositories/ProfileRepository');

class ProfileService {
    async deposit(profileId, amount) {
        const profile = await ProfileRepository.findById(profileId);
        if (!profile) throw new Error('Profile not found');

        return await ProfileRepository.updateBalance(profile, amount);
    }
}

module.exports = new ProfileService();
