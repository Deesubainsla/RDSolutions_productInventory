
//Always four parameters are presen in error middleware:
const errormiddleware = (err, req, res, next)=>{
    err.message = err.message||"Error in server side";
    err.statuscode = err.statuscode||500;

    res.status(err.statuscode).json({success:false, message: err.message});
}


//predefine class of error has only message no status code so now we will make a class by inheriting properties 
//of Error class which have msg and statuscode both

class error extends Error{
    constructor(msg, sc){
        super(msg), //calling parent class constructor
        this.statuscode = sc
    }
}

export {errormiddleware, error}