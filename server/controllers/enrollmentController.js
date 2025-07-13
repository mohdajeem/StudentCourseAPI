import { User } from "../models/User.js";

export const enrollCourse = async (req, res) => {
    const  studentId  = req.user._id;
    const {courseId} = req.body;
    try{
        const student = await User.findById(studentId).select('-password');
        if(!student){
            return res.status(404).json({message : 'User not found'});
        }
        if(student.courses.includes(courseId)){
            return res.status(400).json({message : "Already enrolled in this" });
        }
        student.courses.push(courseId);
        await student.save();
        res.status(200).json({message : 'Enrolled successfully', student});
    } catch(err){
        res.status(500).json({message : 'Server Error', error : err.message});
    }
};


export const getEnrolledCourse = async (req, res) => {
    const userId = req.user._id;
    try{
        const student = await User.findById(userId).populate('courses');
        res.json(student.courses);
    } catch(err){
        res.status(500).json({message: 'Server Error', error : err.message});
    }
};


