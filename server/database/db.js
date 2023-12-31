import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-8ppyy19-shard-00-00.vjk3nc9.mongodb.net:27017,ac-8ppyy19-shard-00-01.vjk3nc9.mongodb.net:27017,ac-8ppyy19-shard-00-02.vjk3nc9.mongodb.net:27017/?ssl=true&replicaSet=atlas-tb0uns-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;