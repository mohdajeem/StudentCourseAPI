import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const auth = async (req, res, next) => {
    
    try{
        let token = req.headers.authorization?.split(" ")[1];
        // console.log("Token : ",token);
        if(!token) return res.status(401).json({message: "Not authorized"});
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch(err){
        res.status(401).json({message: "Invalid token"});
    }
};
