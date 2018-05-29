import { Document, Schema, model } from 'mongoose';

export interface ICourse {
    id: string;
    description: string;
    endDateTime: number;
    name: string;
    startDateTime: number;
    isActive: boolean;
}

export interface ICourseModel extends ICourse, Document {
    id: string;
}

export const CourseSchema: Schema = new Schema({
    _id: String,
    description: { type: String, default: '' },
    endDateTime: { type: Number, default: 0 },
    isActive: { type: Boolean, default: false },
    name: {
        default: '',
        required: true,
        type: String,
    },
    startDateTime: { type: Number, default: 0 },
});

export const CourseModelName = 'Course';

export const CourseDocument = model<ICourseModel>(CourseModelName, CourseSchema);