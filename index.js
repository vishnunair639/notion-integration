const dotenv = require('dotenv').config();
const {Client} = require('@notionhq/client');

//Initialize notion client

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

const listDatabases = async() =>{
    const response = await notion.databases.list();
    console.log(response);
}
//listDatabases();
const database_id = process.env.NOTION_DATABASE_ID

listDatabases();