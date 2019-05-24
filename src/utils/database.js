import mongoose from 'mongoose';

const DB = {
    connect: () => {
        const host = 'localhost';
        const user = 'root';
        const password = 'password';
        const database = 'graphql_database';

        mongoose.connect(`mongodb://${user}:${password}@${host}/${database}`, { useNewUrlParser: true });
    }
}

export default DB;
