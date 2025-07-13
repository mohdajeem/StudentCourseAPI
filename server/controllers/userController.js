import { User } from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

export const signup = async (req, res ) => {
    const {name, email, password, role} = req.body;

    try{
        const studentExists = await User.findOne({email});
        if(studentExists) return res.status(400).json({message : "Email already exist"});

        const user = await User.create({name, email, password, role});
        res.status(201).json({
            _id:user._id,
            name : user.name,
            email : user.email,
            role : role,
            token : generateToken(user._id),
        })
    } catch(err){
        res.status(500).json({message : "Server Error", error : err.message});
    }
};

export const login = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user || !(await user.matchPassword(password)))  return res.status(401).json({message : "Invalid credentials"});

        res.json({
            _id : user._id,
            name : user.name,
            email : user.email,
            role : user.role,
            token : generateToken(user._id),
        });

    } catch(err){
        res.status(500).json({message : "Server error", error: err.message});
    }
};


export const getProfile = async (req,res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err){
        res.status(404).json({message : "User not found"});
    }
}

export const getAllProfile = async (req, res) => {
    try{
        const allUserWithAdmin = await User.find({});
        res.json({allUserWithAdmin});
    } catch(err){
        res.status(500).json({message : 'Server Error',error:err.message});
    }
}
export const deleteUser = async (req, res) => {
    const {userId} = req.params;
    try{
        const user = await User.findByIdAndDelete(userId);
        if(!user){
            return res.status(404).json({message : 'User not found'});
        }
        res.status(200).json({message : "Successfully delete user"});
    } catch(err){
        res.status(500).json({message : 'Server error', error : err.message});
    }
}