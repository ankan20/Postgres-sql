import { getClient } from "./utils";

async function createEntries () {
    const client = await getClient();
    const insertUserText = `INSERT INTO users (email,password) VALUES ($1,$2) RETURNING id`;
    const userInfo = ['ankan@gmail.com',"hashed_password"];

    let response = await client.query(insertUserText,userInfo);

    const insertTodosText = `INSERT INTO todos (title,description,user_id,done) VALUES ($1,$2,$3,$4) RETURNING id`;
    const todosValue = ["study","do 2 dsa problem every day",response.rows[0].id,false];

    await client.query(insertTodosText,todosValue);
    console.log("Entry added");
}

createEntries();