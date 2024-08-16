import { Client } from 'pg';
export async function getClient() {
    const client = new Client({
        connectionString:"postgresql://postgres:password@localhost:5431/postgres"
    })
    await client.connect();
    return client;
}







//docker link for db
//postgresql://postgres:ankan123@localhost:5432/postgres?sslmode=disable

//postgres://wzsxsnxg:LHZ9Cv4QoZ1zctxapkOq2ch672-o9UQe@trumpet.db.elephantsql.com/wzsxsnxg