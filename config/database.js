module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", ""),
      password: env("DATABASE_PASSWORD", ""),
    },
    useNullAsDefault: true,
  },
});

// const path = require("path");

// module.exports = ({ env }) => {
//   return {
//     connection: {
//       client: "sqlite",
//       connection: {
//         filename: path.join(
//           __dirname,
//           "..",
//           env("DATABASE_FILENAME", ".tmp/data.db")
//         ),
//       },
//       acquireConnectionTimeout: 60000,
//     },
//   };
// };
