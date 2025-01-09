const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const auth = req.headers['authorization'];  
    console.log("Authorization Header:", auth); 

    if (!auth) {
        return res.status(403).json({ msg: "Unauthorized, JWT token missing!" });
    }
    try {
        console.log(process.env.JWT_SECRET);
        const decoded = jwt.decode(auth, process.env.JWT_SECRET);
        console.log("Decoded JWT:", decoded); 
        req.user = decoded;  
        next();  
    } catch (err) {
        // console.error("JWT verification failed:", err);  
        return res.status(401).json({ msg: "Unauthorized, JWT is wrong..." });
    }
};

module.exports = authMiddleware;
