const contactModel = require("../models/contactModel")
const nodemailer = require("nodemailer")
// const contactDetails = async(req, res)=>{
//     try{
//         let name = req.body.name
//         let email = req.body.email
       
//           // Create Nodemailer transporter
//     let transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: 'dishapushpad4@gmail.com',
//             pass: 'mxruicpqmgdzuedk'
//         }
//     });

//     // Define email message
//     let message = {
//         from: '"dishapushpad4@gmail.com" <dishapushpad4@gmail.com>', // sender address
//         to: email, // list of receivers
//         subject: "Hello ✔ ", // Subject line
//         text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>", // html body
//     }

//     // Send email and wait for response
//     let info = await transporter.sendMail(message)

//     // If email sent successfully, save contact details to database
//     if (info) {
//         let saveContactDetails = await contactModel.saveContactDetails(name, email)

//         if (saveContactDetails) {
//             return res.status(201).send({ status: true, msg: "Success" })
//         } else {
//             return res.status(400).send({ status: false, msg: "Something went wrong with data insertion" })
//         }
//     }
// } catch (err) {
//     return res.status(500).send({ status: false, error: err.message })
// }

// }





    
        const contactDetails = async (req, res) => {
            try {
                let name = req.body.name
                let email = req.body.email
        
                // Save contact details to database
                let saveContactDetails = await contactModel.saveContactDetails(name, email)
        
                // Create Nodemailer transporter
                let transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: 'dishapushpad4@gmail.com',
                        pass: 'mxruicpqmgdzuedk'
                    }
                });
        
                // Define email message
                let message = {
                    from: `"${name}" <${email}>`, // sender address
                    to: ["dishapushpad4@gmail.com", email], // list of receivers
                    subject: "Message from Contact Form", // Subject line
                    text: req.body.message, // plain text body
                    html: `<p>Message from ${name} (${email}):<br></p>` // html body
                }
        
                // Send email and wait for response
                let info = await transporter.sendMail(message)
        
                // If email sent successfully, return success response
                if (info) {
                    return res.status(201).send({ status: true, msg: "Success" })
                }
            } catch (err) {
                return res.status(500).send({ status: false, error: err.message })
            }
        
        }






module.exports.contactDetails=contactDetails