import { getClient } from "./utils";

async function crud(){

    const client = await getClient();
    const user =await client.query(`CREATE TABLE newusers (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(250) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`);
    console.log(user);

}

crud();



