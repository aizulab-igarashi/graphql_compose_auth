import jwt from 'jsonwebtoken';

const authentication = (app) => {
    app.use(/^(?!\/login).*$/, async (req, res, next) => {
        if(req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer'){
            const status = 401;
            const message = 'Format Error';
            res.status(status).json({ status, message });
            return
        }

        jwt.verify(req.headers.authorization.split(' ')[1], "secret", (err) => {
            if(err){
                return res.json({
                    success: false,
                    message: 'Token Error'
                });
            }
            next();
        });
    });
}

export default authentication;
