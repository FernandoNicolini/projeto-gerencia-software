const Job = require('../models/Job');

class JobRepository {
    async findUnpaidByContractId(contractId) {
        return await Job.findAll({
            where: {
                contractId,
                paid: false,
            },
        });
    }
}

module.exports = new JobRepository();
