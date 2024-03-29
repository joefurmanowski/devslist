import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { migrate } from 'drizzle-orm/mysql2/migrator';

const connection = await mysql.createConnection({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
});

export const db = drizzle(connection);

// async function run() {
//  await migrate(db, { migrationsFolder: 'drizzle' }).catch((err) => {
//      console.error('Migration error: ', err);
//  });
// }

// run();
