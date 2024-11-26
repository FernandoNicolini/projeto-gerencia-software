const ContractService = require('../services/ContractService');

class ContractController {
    async getContracts(req, res) {
        const { profileId } = req.params;
        const contracts = await ContractService.getContractsByProfile(profileId);
        res.json(contracts);
    }
}

module.exports = new ContractController();
