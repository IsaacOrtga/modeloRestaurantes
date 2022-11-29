import { Administrator } from "../models/admin.js";

const saveAdmin = async (req, res) => {

  try {
    const {
      nickReg,
      passReg
    } = req.body;
    // if (nickReg && passReg) {
      // const admin = 
      await Administrator.create({
        nick: nickReg,
        pass: passReg
      });
      // console.log(admin.toJSON().admin_id);
    // }
  }catch(error){
    console.log(error)
  }
 

};


export {
  saveAdmin
}