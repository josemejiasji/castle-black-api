// TODO: replace this with ENV vars
const credentials = {
    user: 'GOT',
    pass: 'W1nt3r1sC0m1ng!'
}

const isValidAuth = function (req) {
    const authHeader = req.header('Authorization');
    if (authHeader) {
        const buffer = new Buffer(authHeader.split(' ')[1], 'base64');
        let reqCredentials = buffer.toString('utf8');
        reqCredentials = reqCredentials.split(':');
        return reqCredentials[0] === credentials.user && reqCredentials[1] === credentials.pass;
    }


    return false;
}

const auth = function (req, res, next) {
    if (!isValidAuth(req)) {
        res.status(401).json({ code: 'UNAUTHORIZED' })
    }
    next();
}

module.exports = auth;