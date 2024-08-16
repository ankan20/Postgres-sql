import { getClient } from "./utils";

async function createTable () {
    const client = await getClient();

    //query for table creation if not already created
    const createUseerTableQuery = `
        CREATE TABLE usersankan10 (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `;

    await client.query(createUseerTableQuery);
    

    //query for todos table
    const createTodosQuery = `
        CREATE TABLE todosankan10 (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            user_id INTEGER REFERENCES users(id),
            done BOOLEAN DEFAULT FALSE
        )
    `;
    await client.query(createTodosQuery);
    console.log("Table created successfully");
}

createTable();