const userModel = require("../model/userModel");

// GET USER INFO
const getUserController = async (req,res)=>{
    try {
        //find user 
        const user = await userModel.findById({_id:req.body.id});
        //validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:"User Not Found"
            })
        }
        //hide password
        user.password = undefined
        //response
        res.status(200).send({
            success:true,
            message:"User Data Get Successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Get User API",
            error
        })
    }
}

module.exports = {getUserController}