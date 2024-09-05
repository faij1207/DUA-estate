import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    avatar:{
        type: String,
        default: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
},
{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
 export default  User;
