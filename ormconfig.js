const {join} = require("path");

const env = process.env.NODE_ENV;

const basePath = join(__dirname, env === "development" ? "src" : "build");

module.exports = {
   "type": "postgres",
   "host": "localhost",
   "port": 5432,
   "username": "dev",
   "password": "dev",
   "database": "cookbook-db",
   "synchronize": true,
   "logging": false,
   "entities": [
      join(basePath, "/entity/**/*{.ts,.js}")
   ],
   "migrations": [
      join(basePath, "/migration/**/*{.ts,.js}")
   ],
   "subscribers": [
      join(basePath, "/subscriber/**/*{.ts,.js}")
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
};
