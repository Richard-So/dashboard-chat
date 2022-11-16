const path = require('path')

module.exports = {
  development: {
    database: 'database_development',
    storage: path.resolve(__dirname, '../dev.sqlite3'),
    dialect: 'sqlite',
  },
  test: {
    database: 'database_test',
    dialect: 'postgres',
  },
  production: {
    database: 'database_production',
    dialect: 'postgres',
  },
}
