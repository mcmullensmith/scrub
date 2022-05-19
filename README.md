# Scrub
Scrub takes in an object and changes the username, name, and the username in an email address to '******';

Scrub does not have any dependencies to run but you will need to run `npm install` to install Jest for testing.

To use scrub simply require the module in your javascript file. You may pass individual objects or objects in an array.

```
const scrub = require('./scrub');

const testObject = {"id": 123, "name": "Elsa","username": "xXfrozen_princessXx","email": "elsa@arendelle.com","age": 21,"power": "ice ray"};

const newObject = scrub(testObject);

console.log('scrubbed object: ', newObject);
```

A good use case is taking a log file and parsing the lines into scrub:

```const fs = require('fs');
   const scrub = require('./scrub');
   
   let results = [];
   
   fs.readFile('log.txt', function(err, data) {
       if(err) throw err;
   
       const arr = data.toString().replace(/\r\n/g,'\n').split('\n');
   
       for(let i of arr) {
   
           results.push(scrub(JSON.parse(i)))
       }
   
       console.log('results: ', results)
   });
```

Each line of log.txt will contain an object like:
```
{"id": 123, "name": "Elsa","username": "xXfrozen_princessXx","email": "elsa@arendelle.com","age": 21,"power": "ice ray","friends": [{"id": 234,"username": "MagicSnowman32"}, {"id": 456,"username": "call_me_anna"}]}
  ```

## Test
There are two tests in `scrub.test.js`. The first test checks for a single object instance and the second test checks for a nested object instance.

To run the test run `npm test` in the command line.