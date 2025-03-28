const testService = require("../services/test")

const test = {};

test.test = async (req, res) => {
    console.log("here bhai in controller")
    try {
        const result = await testService.test();
        res.send(result)
    }
    catch (err) {
        res.send({
            status: "err",
            message: "error occured controller",
            data: err.message
        })
    }
}

module.exports = test