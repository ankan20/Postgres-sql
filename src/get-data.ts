import { getClient } from "./utils";

async function getUsers (){
    const client = await getClient();
    const selectUsersText = `SELECT * FROM users`;
    const userRes = await client.query(selectUsersText);
    console.log("Users : ");
    
    for(let user of userRes.rows){
        console.log(`Email : ${user.email} ,ID : ${user.id}`);
    }
}

async function getUserFromEmail(email:string) {
    const client = await getClient();

    const selectUserText = `SELECT * FROM users WHERE email = $1`;
    const userRes = await client.query(selectUserText,[email]);

    console.log("Single User details :");
    for(let user of userRes.rows){
        console.log(`ID ${user.id} and email : ${user.email}`);
    }
    
}


async function getTodosForUser (userId:number) {
    const client = await getClient();

    const selectTodosText = `SELECT * FROM todos WHERE user_id = $1`;
    const todosRes = await client.query(selectTodosText,[userId]);

    console.log(`Todos for User ID ${userId}`);
    for(let todo of todosRes.rows){
        console.log(`ID:${todo.id} ,title : ${todo.title} ,description : ${todo.description} ,Done : ${todo.done}`);
    }
}


getUsers();

getUserFromEmail("ankan@gmail.com");

getTodosForUser(1);
