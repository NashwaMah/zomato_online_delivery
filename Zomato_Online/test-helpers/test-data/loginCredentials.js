require('dotenv').config()

export const users=
 
    [
        {
            "email":process.env.gmail,
            "password":process.env.gmailpassword,
            "type":"gmail",
            "phone":"01243578",
            "code":"961"
           

        } ,
        {
            "email":process.env.email,
            "password":process.env.password,
            "type":"email",
            "name":"nashwa mahmoud",
            "phone":"01243578",
            "code":"961"

        }
    ]