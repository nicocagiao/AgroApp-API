// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'admin',
      database : 'agroapp'
    },
  },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      "dialect": "postgres",
      ssl : true,
      "dialectOptions": {
        "ssl": {"require": true}
      },
},
};
