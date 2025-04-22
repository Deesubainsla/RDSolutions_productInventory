

//A wrapper for preventing repeting task of try catch in controllers:
const trycatchwrapper = (controller)=>{
    return async(req, res, next)=>{
        try {
            await controller(req,res,next);
        } catch (error) {
            next(error);
        }
    }
}

export default trycatchwrapper




