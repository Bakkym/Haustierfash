import User from "../models/User";

export const createUser = async (req, res) => {
    const { username, email, password, roles } = req.body;
  
    const newUser = new User({
      username,
      email,
      password: await User.hashPassword(password),
    });
  
    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }
  
    const savedUser = await newUser.save();
    console.log(savedUser._id);
  
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 86400, // 24 hours
    });
  
    res.status(200).json({ token });
  };


export const getUsers = async (req, res) => { 
  const users = await User.find()
  res.json(users) 

}

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.userId)
  res.json(user)
}

export const updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body,{
    new: true
  });
  res.status(200).json(updatedUser);
}

