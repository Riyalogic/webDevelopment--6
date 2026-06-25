import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        reequired: true,
    },
    gender: {
        type: String,
        reequired: true,
    },
    photo: {
        url: {
            type: String,
        },
        published: {
            type: String,
        reequired: true,
        }
    },
    password: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
},
{
    timestamps: true,
},
);

const User = mongoose.model("User",UserSchema);

export default User;