const usersServices = require("../services/users");

const usersController = {};

usersController.posts = async (req, res) => {
    console.log("here bhai in controller")
    try {
        if(req.query.type === "popular") {
            const result = await usersServices.popular();
            res.send(result)
        }
        else if(req.query.type === "latest") {
            const result = await usersServices.latest();
            res.send(result)
        }
        else {
            res.send({
                status: "err",
                message: "invalid query parameter",
                data: null
            })
        }
    }
    catch (err) {
        res.send({
            status: "err",
            message: "error occured in posts controller",
            data: err.message
        })
    }
}

usersController.users = async (req, res) => {
    try {
        const result = await usersServices.users();
        res.send(result)
    }
    catch (err) {
        res.send({
            status: "err",
            message: "error occured in users controller",
            data: err.message
        })
    }
}


module.exports = usersController