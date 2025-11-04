const Message = require("../model/message.model")

const sendMessages = async (req,res,next) =>{
    try{
        


        const message = await Message.create(req.body)

        res.json(message)
    }catch(err){
        console.error(err)
    }
}

module.exports = sendMessages