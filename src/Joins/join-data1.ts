import { getClient } from "../utils";

async function getUserAndTodosWithJoin(userId:number){
    const client = await getClient();

    const joinText = `SELECT users.*,todos.title, todos.description, todos.done FROM users LEFT JOIN todos on users.id=todos.user_id WHERE user.id = $1`;

    const result = await client.query(joinText,[userId]);
    console.log(result);
}

getUserAndTodosWithJoin(1);