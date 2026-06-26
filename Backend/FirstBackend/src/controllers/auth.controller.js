import User from "../models/user.model.js";

export const RegisterUser = async (req, res, next) => {
  // res.json({ message: "Register successfull from controller" });
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      // res.status(400).json({ message: "All Feilds Required" });
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // res.status(409).json({ message: "Email Already Registered" });
      const error = new Error("Email Already Registered");
      error.statusCode = 409;
      return next(error);
    }

    const phototurl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    const photo = {
      url: phototurl,
      publicId: null,
    };

    const newUser = await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });

    res.status(201).json({message: "User Created Successfully"})
  } 
  
  catch (error) {
    res.status(500).json({message:"Internal Server Error"})
  }

};

export const LoginUser = async (req, res, next) => {
  // res.json({ message: "Login successfull from controller" });
  try {
    const {email,password}=req.body;

    if(!email || !password){
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }
    console.log(0);
    
    
     const existingUser = await User.findOne({ email });
    if (!existingUser) {
      // res.status(409).json({ message: "Email Already Registered" });
      const error = new Error("Email not Registered");
      error.statusCode = 404;
      return next(error);
    }
    console.log(1);
    
  
    if(password !== existingUser.password){
      const error = new Error("Incorrect Password");
      error.statusCode = 401;
      return next(error);
    }
    console.log(2);
    
    
    res.status(200).json({
      message: "Welcome Back",
      data: existingUser,
    })

  } catch (error) {
    console.log(error.message);
    next();
  }
};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logout successfull from controller" });
};
