/**
 * Run: node scripts/hash-admin-password.js
 * Use the output as ADMIN_PASSWORD_HASH in .env
 */
const bcrypt = require("bcryptjs");
const password = process.argv[2] || "admin123";
bcrypt.hash(password, 10).then((hash) => {
  console.log("Use this in .env as ADMIN_PASSWORD_HASH=");
  console.log(hash);
});
