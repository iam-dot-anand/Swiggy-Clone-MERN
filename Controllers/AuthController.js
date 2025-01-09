const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const UserModel = require('../Models/userSchema');

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body);

        // Check user exists or not
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ msg: "User already exists", success: false });
        }

        // Bcrypt the password using hash before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user model
        const userModel = new UserModel({ name, email, password: hashedPassword });

        // Save the user to the database
        await userModel.save();

        res.status(201).json({ msg: "Signed up successfully", success: true });
    } catch (err) {
        console.error("Error during sign-up:", err);
        res.status(500).json({ msg: "Internal server error", success: false, error: err.message });
    }
};
const login = async (req, res) => {
    try {
        const {email, password } = req.body;

        // Check user exists or not
        const existingUser = await UserModel.findOne({ email });
        if (!existingUser) {
            return res.status(409).json({ msg: "User doesn't exist", success: false });
        }

        // Bcrypt the password and check equal or not from database
        const checkPassword = await bcrypt.compare(password, existingUser.password);
        if(!checkPassword){
            return res.status(409).json({msg:"Incorrect Password", success:false})
        }
        const env=process.env.JWT_SECRET;
        console.log(env)
        const jwtToken=jwt.sign(
            {email: existingUser.email, _id: existingUser._id},
            process.env.JWT_SECRET,
            {expiresIn:'24'}
        )

        res.status(200).json({ msg: "Login successfully", success: true, jwtToken, email, name: existingUser.name });
    } catch (err) {
        res.status(500).json({ msg: "Internal server error", success: false, error: err.message });
    }
};

const deleteUser = async function handleDeleteById(req, res){
    await UserModel.findOneAndDelete(req.params.id);
    return res.status(200).json({ status: "Delete Successfull" });
}
const allUsers = async (req, res)=>{
    const allDBUser= await UserModel.find({});
    return res.json(allDBUser);
}

module.exports = { signUp, login, deleteUser, allUsers };

