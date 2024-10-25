import User from "../models/user";
import bcrypt from "bcrypt"
import generateToken from "../utils";

const registerUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({
                error: "User already Exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            email,
            password: hashedPassword
        })

        res.status(201).json({
            _id: user._id,
            email: user.email
        });

    } catch (error) {
        if (error.name === "ValidationError"){
            res.status(400).json({error: error.massage})
        } else{
            res.status(500).json({
                error: error.massage
            })
        }
    }
};

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = User.findOne({email});

        if(!user || !(await user.matchPasswords(password))){
            return res.status(401).json({
                error: "Invalid Login Credentials"
            })
        }

        const token = await generateToken(user._id) ;
        res.status(200).json({
            _id: user._id,
            email: user.email,
            token,
        })    
        
    } catch (error) {
        res.status(500).json({error: "Internal server error"})
    }
}

export default {
    registerUser,
    loginUser,
}