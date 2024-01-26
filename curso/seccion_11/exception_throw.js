const fs = require('node:fs');
try {
  const data = fs.readFileSync('/Users/tardes/ejemplo1x.txt', 'utf8');
  console.log(data);
  console.log("TODO OK");
} catch (err) {
  console.error(err.message);
  console.log("KO");
  throw err;
} finally {
    console.log("DESPUÉS DEL TRY-CATCH");
}
