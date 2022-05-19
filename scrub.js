
function scrub( obj )  {

    if ( typeof obj !== 'object' || obj === null) {
        return;
    }

    Object.keys(obj).forEach( key => {

        if ( key === 'username' || key === 'name') {
            obj[key] = "******"
        } else if( key === 'email') {
            const split = obj[key].split('@');
            split[0] = '******';
            obj[key] = split.join('@');
        }

        if (typeof obj[key] === 'object' && obj[key] !== null) {
            scrub(obj[key]);
        }
    });

    return obj;

}

module.exports = scrub;

