import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";
import Role from "../models/Role.js";

export const signUp = async(req, res) => {
    const { username, email, password, name, lastname, address, phone } = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.hashPassword(password),
        name,
        lastname,
        address,
        phone

    });

    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];

    const savedUser = await newUser.save();
    console.log(savedUser._id);

    const token = jwt.sign({ id: savedUser._id }, SECRET, {
        expiresIn: 86400, // 24 hours
    });

    res.status(200).json({ token });
};



export const signIn = async(req, res) => {
    const userFound = await User.findOne({ email: req.body.email }).populate("roles"); // Populate: Traer los datos de la relación

    if (!userFound) return res.status(400).json({ message: 'User not found' })

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if (!matchPassword) return res.status(401).json({ token: null, message: 'Invalid password' })

    const token = jwt.sign({ id: userFound._id }, SECRET, {
        expiresIn: 86400 // 24 hours
    })

    const userId = userFound._id
    console.log(userFound)

    res.json([{ userId }, { token }])
};