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
const getSvelteResources = async() =>{
    const payload = {
        path: `databases/08546093-ed5f-4fff-b41b-beddb10f1230`,
        method: 'POST'
    }
    const results = await notion.databases.retrieve(payload);
    console.log("Svelte Resources from DB:", results);
};
listDatabases();