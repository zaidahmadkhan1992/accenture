 
const  jwtDecode=require("jwt-decode");

/**
 * This Fucntion will take care of api token verifcations
 * @param {} req 
 * @param {*} res 
 * @param {*} next 
 */
 const jwt = async function (req, res, next) {
    const token = req.headers['authorization'];
  try{
    const decoded = jwtDecode.jwtDecode(token);   

  }catch(e){
    res.status(401).send("UnAuthorized");
  }
    next()
  }


  /**
   * for pagination 
   * @param {*} array 
   * @param {*} page_number 
   * @param {*} page_size 
   * @returns 
   */
function pagication(array,page_number,page_size){
  var result=[];var x=0;
  let endLoop=parseInt(page_number)+parseInt(page_size);
   for(var i=page_number;i<array.length;i++){
    if(i>=endLoop){
      break;
     }
   result[x]=array[i];  
   x++;
   }
   return result;
}

 module.exports = {  jwt,pagication}