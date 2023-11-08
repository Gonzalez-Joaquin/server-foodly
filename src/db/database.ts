import { createPool, Pool } from 'mysql2/promise'

const getConnection = async (): Promise<Pool> => {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'food_app',
    });

    return connection;
}

export default getConnection