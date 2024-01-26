const fs = require('node:fs');
try {
  const data = fs.readFileSync('/Users/tardes/ejemplo1.txt', 'utf8');
  console.log(data);
  console.log("TODO OK");
} catch (err) {
  console.error(err.message);
  console.log("KO");
} finally {
    console.log("DESPUÉS DEL TRY-CATCH");
}
