const JobService = require('../services/JobService');

class JobController {
    async getUnpaidJobs(req, res) {
        const { contractId } = req.params;
        const jobs = await JobService.getUnpaidJobs(contractId);
        res.json(jobs);
    }
}

module.exports = new JobController();
