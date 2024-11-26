const JobRepository = require('../repositories/JobRepository');

class JobService {
    async getUnpaidJobs(contractId) {
        return await JobRepository.findUnpaidByContractId(contractId);
    }
}

module.exports = new JobService();
