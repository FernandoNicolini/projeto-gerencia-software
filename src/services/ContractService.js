const ContractRepository = require('../repositories/ContractRepository');

class ContractService {
    async getContractsByProfile(profileId) {
        return await ContractRepository.findByProfileId(profileId);
    }
}

module.exports = new ContractService();
