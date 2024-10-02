const fs = require('fs');

console.log('->>', __filename);
fs.writeFileSync("filex.txt", "This is example of fs in js")