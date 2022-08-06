const { bastardizeName } = require('./name-utils');

const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Can I get a name for your order?\n', name => {
    const bastardizedName = bastardizeName(name);
    console.log(`Your order is ready, ${bastardizedName}!`);
    readline.close;
});
