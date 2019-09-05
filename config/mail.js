"use strict";

const Env = use("Env");

module.exports = {
  connection: Env.get("MAIL_CONNECTION", "pop3"),

  smtp: {
    driver: "smtp",
    pool: true,
    port: 2525,
    host: Env.get("SMTP_HOST"),
    secure: false,
    auth: {
      user: Env.get("MAIL_USERNAME"),
      pass: Env.get("MAIL_PASSWORD")
    },
    maxConnections: 5,
    maxMessages: 100,
    rateLimit: 10
  }
};
