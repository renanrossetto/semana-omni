const box = require ("../models/box");

class boxcontroller {

   async store(req, res){
       

       const Box = await box.create({ title: req.body.title});
        return res.json (Box);
    }

    async show (req,res){
        const box = await box.findById(req.params.id).populate({
            path: "files",
            options: {sort: {createdAt: -1}}
        });
        return res.json(box);
    }
}

module.exports = new boxcontroller();
