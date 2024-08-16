/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:N3zUMC6ZlbBK@ep-lucky-butterfly-a5tl6id0.us-east-2.aws.neon.tech/Gen-Content?sslmode=require',
    }
};