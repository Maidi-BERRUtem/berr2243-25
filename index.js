const { MongoClient } = require('mongodb');

const drivers = [
    {
        name: "John Doe",
        vehicleType: "Sedan",
        isAvailable: true,
        rating: 4.8
    },
    {
        name: "Alice Smith",
        vehicleType: "SUV",
        isAvailable: false,
        rating: 4.5
    }
];

// Show all drivers' names in the console
drivers.forEach(driver => console.log(driver.name));

// Add an additional driver
drivers.push({
    name: "Bob",
    vehicleType: "Taxi",
    isAvailable: true,
    rating: 4.7
});

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        const db = client.db("testDB");
    
        const driversCollection = db.collection("drivers");
    
        drivers.forEach(async (driver) => {
            const result = await driversCollection.insertOne(driver);
            console.log(`New driver created with result: ${result}`);
        });
    
        const availableDrivers = await db.collection('drivers').find({
            isAvailable: true,
            rating: { $gte: 4.5 }
        }).toArray();
        console.log("Available drivers:", availableDrivers);
    
    } finally {
        await client.close();
    }
    
}

main().catch(console.error);

