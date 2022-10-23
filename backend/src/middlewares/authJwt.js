// Revisar el rol que tiene el usuario
import  jwt  from "jsonwebtoken";
import { SECRET } from "../config.js";
import User from "../models/User.js";
import Role from "../models/Role.js";
import cors from 'cors';

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"] 
    console.log(token)
    if (!token) return res.status(403).json({ message: "No token provided" });
  
    const decoded = jwt.verify(token, SECRET)
    req.userId = decoded.id;
    console.log(req.userId)
  
    const user = await User.findById(req.userId , { password: 0 });
    console.log(user);
    if (!user) return res.status(404).json({ message: "No user found" });
    
    next()
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" });
    
  }
};

export const isModerator = async (req, res, next) => {
  const user = await User.findById(req.userId)
  const roles = await Role.find({_id: {$in: user.roles}})

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "moderator") {
      next();
      return;
    }
  }

  return res.status(403).json({message: "Require Moderator Role"})
}


export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId)
  const roles = await Role.find({_id: {$in: user.roles}})

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin") {
      next();
      return;
    }
  }

  return res.status(403).json({message: "Require admin Role"})
}


var whitelist = ['http://localhost:3000']

export var corsOptions = {
    origin: function(origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null,true);
        }else{
            callback(new Error('Access denied by cors'))
        }
    }
};
