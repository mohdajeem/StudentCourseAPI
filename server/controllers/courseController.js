import { Course } from "../models/Course.js";
import { User } from "../models/User.js";

export const createCourse = async (req, res) => {
    const instructor = req.user._id;
    const {title, description,code, credits} = req.body;
    try{
        const courseExists = await Course.findOne({code});

        if(courseExists){
            return res.status(400).json({message : 'Course code already exists'});
        }
        const course = await Course.create({title, description, code, credits, instructor});
        res.status(201).json(course);
    } catch(err){
        res.status(500).json({message : 'Server Error', error : err.message});
    }
};
export const getCourses =  async (req, res) => {
    try{
        const courses = await Course.find({});
        res.json(courses);
    } catch(err){
        res.status(500).json({message : 'Failed to fetch courses', error : err.message});
    }
};

export const getInstructorByCourse = async (req, res)  => {
    const {courseId} = req.params;
    try{
        const course = await Course.findById(courseId).populate('instructor','-password');
        if(!course){
            return res.status(404).json({message : "Course not found"});
        }
        res.status(200).json({
            courseId: course._id,
            courseTitle: course.title,
            instructor: course.instructor
        });
    } catch(err){
        res.status(500).json({message: 'Server Error', error:err.message});
    }
}

export const getCoursesByInstructor = async(req, res) => {
    const instructor = req.params.instructorId;
    try{
        const courses = await Course.find({instructor: instructor}).populate('instructor', 'name email');
        if(courses.length === 0){
            return res.status(404).json({message : 'instructor have no courses yet.'});
        }
        res.status(200).json({
            courses : courses
        });

    } catch(err){
        res.status(500).json({message :'Server Error',error : err.message});
    }

}


export const getCourseEnrollmentCount = async (req, res) => {
    const { courseId } = req.params;
    try{
        const count = await User.countDocuments({courses : courseId});

        res.status(200).json({
            courseId,
            enrolledStudents : count,
        });
    } catch(err){
        res.status(500).json({message : 'server error', error : err.message});
    }
}



export const deleteCourseById = async (req, res) => {
    const { courseId } = req.params;
    try{
        const course = await Course.findByIdAndDelete(courseId);
        if(!course){
            return res.status(404).json({message : 'Course not found...'});
        }
        res.status(200).json({message:"Course delete successfully"});
    } catch(err){
        res.status(500).json({message : 'server error', error : err.message});
    }
}

export const updateCourse = async (req, res) => {
    const {courseId} = req.params;
    const {title, description, code, credits} = req.body;
    try{
        const course = await Course.findById(courseId);
        if(!course){
            return res.status(404).json({message : 'course not found..'});
        }
        if(title) course.title = title;
        if(description) course.description = description;
        if(code) course.code = code;
        if(credits) course.credits = credits;

        const updatedCourse = await course.save();
        res.status(201).json({
            message : "course updated successfully",
            course : updatedCourse,
        })

    } catch(err){
        res.status(500).json({message: 'Server error', error:err.message});
    }
}


