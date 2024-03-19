const mongoose = require("mongoose");
const Beachy = require("./models/Beachy"); // Update this path
require("dotenv").config(); 


mongoose
        .connect(process.env.http = "localhost:9000", { // Update with your database connection string              
                useNewUrlParser: true,
                useUnifiedTopology: true,
        })
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.error("MongoDB connection error:", err));

const beachData = [
    {
        name: "Coral Beach",
        location: "Tropical Island",
        description: "A pristine beach with clear water and abundant marine life.",
        activities: ["Snorkeling", "Sunbathing"],
        amenities: ["Shower", "Beach Bar"],
        Id: 1,
        img: "https://images.unsplash.com/photo-1516711165806-f32166523643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    },
    {
        name: "Sunny Beach",
        location: "Sunnyville",
        description: "A beautiful sunny beach with golden sand.",
        activities: ["Swimming", "Sunbathing"],
        amenities: ["Showers", "Lifeguards"],
        Id: 2,
        img: "https://images.unsplash.com/photo-1569506674473-48367168c551?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",  
    },
    // Add more beach objects
];

Beachy.insertMany(beachData)
    .then(() => {
        console.log("Beaches seeded successfully");
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error("Error seeding beaches:", err);
        mongoose.connection.close();
    });
