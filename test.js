const dlusidv = require('./dlsu-id-verifier');
const fs = require('fs');

const __test_verify = () => {
  let list = [];
  for (let i = 10000000; i < 20000000; i++) {
    console.log("trying: " + i + (dlsuidv.verifyDLSUId(i) ? " - HIT!" : " - X"))
    if (dlsuidv.verifyDLSUId(i)) list.push(i);
  }
  const data = list.join('\n');
  const filePath = 'list.txt';

  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log(`File saved successfully as ${filePath}`);
    }
  });
}

__test_verify();
