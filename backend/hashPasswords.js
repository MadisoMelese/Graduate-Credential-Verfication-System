require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Adjust the path to your User model

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to MongoDB');

        // Fetch all users
        const users = await User.find();

        // Iterate over each user and update the password
        for (const user of users) {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            await User.updateOne({ _id: user._id }, { $set: { password: hashedPassword } });
            console.log(`Updated user ${user.username}`);
        }

        console.log('Password hashing complete');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error connecting to MongoDB or hashing passwords:', err);
        mongoose.connection.close();
    });
