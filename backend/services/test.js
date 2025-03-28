const { client } = require('../db/db'); 

const testServices = {};

testServices.test = async ()=>{
    console.log("in service")
    try{
        const query = "SELECT * FROM testing";
        const result = await client.query(query);
        return {
            status : "OK",
            message : "Data fetched successfully",
            data : result.rows
        }
    }
    catch(err){
        console.log(err)
        return {
            status : "err",
            message : "error occured service",
            data : err.message
        }
    }
}

module.exports = testServices;