const box = require("../models/box");
const File = require ("../models/File");

class filecontroller {

   async store(req, res){
       const box = await box.findById(req.params.id);

       const file = await File.create({
        title: req.file.originalname,
        path: req.file.key,

       });

       box.files.push(file);
       await box.save(); 

       req.io.sockets.in(box._id).emit("file",file);
return res.json(file);
       
  }
}

module.exports = new filecontroller();
