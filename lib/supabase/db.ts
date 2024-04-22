import { drizzle } from "drizzle-orm/postgres-js";
import * as dotenv from "dotenv";
import * as schema from "../../migrations/schema";
import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";

dotenv.config({ path: ".env" });

if(!process.env.DATABASE_URL){
    console.log("cannot find database url")
}
const client = postgres(process.env.DATABASE_URL as string) ;
const db = drizzle(client, {schema});

const migrateDb = async ()=>{
    try{
            console.log("migrating client");
            await migrate(db, { migrationsFolder: 'migrations'});
            console.log('succesfully migrated');
            
    } catch(err){
        console.log('Error migrating client ', err);
    }
}

migrateDb();

export default db;