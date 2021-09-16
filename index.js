const app = require('./app');

const PORT = process.env.PORT || 3000;

async function main() {
  await app.listen(PORT);
  console.log('Server on port 3000');
}

main();
