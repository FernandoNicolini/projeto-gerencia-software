const sequelize = require('./src/shared/database');
const Profile = require('./src/models/Profile');
const Contract = require('./src/models/Contract');
const Job = require('./src/models/Job');

async function populateDatabase() {
    const transaction = await sequelize.transaction();

    try {
        await sequelize.sync({ force: false });
        console.log('Database synchronized');

        const profiles = await Profile.bulkCreate([
            { name: 'John Doe', balance: 150.75 },
            { name: 'Jane Smith', balance: 200.00 },
            { name: 'Alice Johnson', balance: 300.50 },
            { name: 'Bob Brown', balance: 450.10 },
            { name: 'Charlie Davis', balance: 600.00 }
        ], { transaction });

        console.log('Profiles created:', profiles.map(profile => profile.name));

        for (let i = 0; i < profiles.length; i++) {
            const profile = profiles[i];

            const contracts = await Contract.bulkCreate([
                { title: `Website Development for ${profile.name}`, profileId: profile.id },
                { title: `App Design for ${profile.name}`, profileId: profile.id },
                { title: `SEO Optimization for ${profile.name}`, profileId: profile.id },
                { title: `Digital Marketing for ${profile.name}`, profileId: profile.id },
                { title: `Branding for ${profile.name}`, profileId: profile.id }
            ], { transaction });

            console.log(`Contracts created for ${profile.name}:`, contracts.map(contract => contract.title));

            for (let j = 0; j < contracts.length; j++) {
                const contract = contracts[j];

                await Job.bulkCreate([
                    { description: `Job 1 for ${contract.title}`, price: 100.00, contractId: contract.id, paid: false },
                    { description: `Job 2 for ${contract.title}`, price: 200.00, contractId: contract.id, paid: true },
                    { description: `Job 3 for ${contract.title}`, price: 150.00, contractId: contract.id, paid: false },
                    { description: `Job 4 for ${contract.title}`, price: 300.00, contractId: contract.id, paid: true },
                    { description: `Job 5 for ${contract.title}`, price: 250.00, contractId: contract.id, paid: false }
                ], { transaction });

                console.log(`Jobs created for contract ${contract.title}`);
            }
        }

        await transaction.commit();
        console.log('Database populated with sample data');
        process.exit();
    } catch (error) {
        await transaction.rollback();
        console.error('Error populating the database:', error);
    }
}

populateDatabase();
