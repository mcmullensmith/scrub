const scrub = require('./scrub');

const input = {
    "id": 123,
    "name": "Elsa",
    "username": "xXfrozen_princessXx",
    "password": "badpassword",
    "email": "elsa@arendelle.com",
    "age": 21,
    "power": "ice ray"
};

const output = {
    "id": 123,
    "name": "******",
    "username": "******",
    "password": "******",
    "email": "******@arendelle.com",
    "age": 21,
    "power": "ice ray"
};

const nestedInput = {"id": 123,
    "name": "Elsa",
    "username": "xXfrozen_princessXx",
    "email": "elsa@arendelle.com",
    "password": "badpassword",
    "age": 21,
    "power": "ice ray",
    "friends": [{
        "id": 234,
        "username": "MagicSnowman32"
    }, {
        "id": 456,
        "username": "call_me_anna"
    }]
};

const nestedOutput = {"id": 123,
    "name": "******",
    "username": "******",
    "password": "******",
    "email": "******@arendelle.com",
    "age": 21,
    "power": "ice ray",
    "friends": [{
        "id": 234,
        "username": "******"
    }, {
        "id": 456,
        "username": "******"
    }]
};

test('replace username, name , password and name in email to ******', () => {
    expect(scrub(input)).toStrictEqual(output);
});

test('replace username, name, password and name in email to ****** on nested objects', () => {
    expect(scrub(nestedInput)).toStrictEqual(nestedOutput);
});

