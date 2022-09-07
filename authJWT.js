const jwt=require('jsonwebtoken')
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, 'verySecretValue', (err, user) => {
            if (err) {
                return res.sendStatus(403); //forbidden
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401); //unauthrized access
    }
};

module.exports=authenticateJWT;