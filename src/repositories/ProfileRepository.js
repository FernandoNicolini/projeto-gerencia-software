const Profile = require('../models/Profile');

class ProfileRepository {
    async findById(id) {
        return await Profile.findByPk(id);
    }

    async updateBalance(profile, amount) {
        profile.balance += parseFloat(amount);
        return await profile.save();
    }
}

module.exports = new ProfileRepository();
