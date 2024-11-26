const Contract = require('../models/Contract');

class ContractRepository {
    async findByProfileId(profileId) {
        return await Contract.findAll({ where: { profileId } });
    }
}

module.exports = new ContractRepository();
