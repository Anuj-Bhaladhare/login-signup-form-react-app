const User = require("../modals/User");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async(req, res) => {
    try{
		// Destructure fields from the request body
        const {
            firstName,
            lastName,
            email,
            passWord,
            confirmPassword
        } = req.body;

        if(!firstName || !lastName || !email || !passWord ) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
        }

        // Check if password and confirm password match
        if(passWord !== confirmPassword){
            return res.status(400).json({
                success: false,
                message: "Password and Conform Password not match"
            })
        }

	// Check if user already exists
    const existingUser = await User.findOne( {email});
    if(existingUser) {
        return res.status(400).json({
            success: false,
            message: "this user allready Existing in our System, Please sign in to continue",
        })
    }

    // password hassing
    const hashedPassword = await bycrypt.hash(passWord, 10);

    if(!hashedPassword){
        return res.status(403).json({
            success: false,
            message: "password not Bycrypt",
        })
    }

    // create Entry To database
    const user = await User.create({
        firstName,
        lastName,
        email,
        passWord: hashedPassword
    });

	return res.status(200).json({
		success: true,
        user,
		message: "User registered successfully",
    })

    } catch(error) {
        console.error(error);
		return res.status(500).json({
			success: false,
			message: "User cannot be registered. Please try again.",
		});
    }
};


// ========================================================================



exports.login = async(req, res) => {
    try{
        const {
            email,
            passWord
        } = req.body;

        if(!email || !passWord){
            return res.status(400).json({
                success: false,
                message: "All fields are requirs...",
            })
        }

        const user = await User.findOne( {email});

        if(!user){
            return res.status(401).json({
                success: false,
                message: "user not sign up plese first SignUp then login...",
            })
        }

        const compairePassword = await bycrypt.compare(passWord, user.passWord);

        if(!compairePassword){
            return res.status(401).json({
                success: false,
                message: "Password is incorrect...",
            });
        }

        return res.status(200).json({
            success: true,
            message: "User login successfully",
        })

    } catch (error) {
        console.error(error);
		return res.status(500).json({
			success: false,
			message: `Login Failure Please Try Again`,
		});

    }
};
