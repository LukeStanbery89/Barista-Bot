const { toTitleCase } = require('./string-utils');

function bastardizeName(name) {
    const parsed = parseName(name);
    if (parsed.hasWith) {
        return `${toTitleCase(parsed.withClause)}${parsed.firstName.substring(1)}`;
    } else {
        return parsed.firstName;
    }
}

function parseName(name) {
    let withClause = null;
    let withClauseArr = [];
    const nameArr = name.split(' ');

    // Get first name
    const firstName = nameArr[0];

    // Check for "with"
    const withIndex = nameArr.indexOf('with');
    const hasWith = withIndex > -1;

    // If applicable, get the "with" value
    if (hasWith) {
        withClauseArr = nameArr.slice(withIndex + 1);
        if (withClauseArr[0] === 'a') {
            withClauseArr.splice(0, 1);
        }
        withClause = withClauseArr.join(' ');
    }

    return {
        original: name,
        nameArr,
        firstName,
        hasWith,
        withIndex,
        withClauseArr,
        withClause,
    };
}

module.exports = {
    bastardizeName,
};