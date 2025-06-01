  require("dotenv").config();
  const { Pool } = require("pg");

  const pool = new Pool({
    connectionString: `postgresql://proect:xNsXqPLwbpEbpDwThrfonPPTaWKmcO7M@dpg-d0u3rhje5dus738kfs00-a.oregon-postgres.render.com/proect`,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  module.exports = pool;
