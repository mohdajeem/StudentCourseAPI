import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description: {
        type: String,
        required : true,
    },
    code : {
        type : String,
        required : true,
        unique : true,
    },
    credits: {
        type : Number,
        default: 3,
        required: true,
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},
{
    timestamps:true,
});

export const Course = mongoose.model('Course', courseSchema);