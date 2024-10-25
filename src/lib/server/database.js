
import postgres from 'postgres'
import 'dotenv/config';
//import {PGCONNECT1} from '$env/static/private';

//console.log("process env",{env:process.env});
const PGCONNECT=process.env.PGCONNECT;
//console.log('connect string is >'+PGCONNECT+"<");
const sql = postgres(PGCONNECT, {} )

export default sql;
