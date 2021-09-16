const app = require('./app');

const PORT = process.env.PORT;

async function main() {
  await app.listen(PORT);
  console.log('Server on port', PORT);
  // console.log(`process.env.DB_NAME`, process.env.DB_NAME);
  // console.log(`process.env.DB_USER`, process.env.DB_USER);
  console.log(`process.env.DB_HOST`, process.env.DB_HOST);
  console.log(`process.env.DB_USER`, process.env.DB_USER);
}
main();
