import mysql from 'mysql';
import { config } from './config';


export const query = async (sql, params) => {
    const connection = await mysql.createConnection(config);
    const result = await connection.execute(sql, params);
    
    return result;
}
