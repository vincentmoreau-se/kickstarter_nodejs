const path = require('path');

module.exports = {

  development: {
    client: 'better-sqlite3',
    connection: {
      filename: path.join(__dirname, 'db.sqlite3')
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'mysql',
    connection: {
      database: process.env.DB_DATABASE,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host :    process.env.DB_HOST,
      port :    process.env.DB_PORT,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
