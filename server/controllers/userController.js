import { User } from "../model/userModel.js";

export const postUsers = async(req,res)=>{
   
    try {
        const { username, email } = req.body;
        // console.log(req);

        const newUser = new User({ username, email });
       await newUser.save();
    res.status(201).json({ message: "User created", user: newUser });
    } catch (error) {
        console.log(error.message);
    res.status(400).json({ error: error.message });

    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        // res.send(users);
        res.status(201).json({ message: "data fetched successfully", users });
        
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
}