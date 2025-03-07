import { Pool } from "pg";

const connectionString = 'postgres://kafbdndx:5pHy4Dc5G5yK3_71dK7eMY9KAXTtNcBz@kesavan.db.elephantsql.com/kafbdndx';

const db = new Pool({ connectionString });

export default db;
