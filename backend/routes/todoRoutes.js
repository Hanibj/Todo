const router = require("express").Router(); // importer les routeur du express librerie
const Todo = require("../models/todo");

router.get("/", (req,res) => { // req :request , res :response
    Todo.find ((err, result) =>{
       if (err) throw new Error(err);
       res.json(result);
    });
});
router.post("/", (req,res) => {//insertion
      Todo.create(req.body,(err,result)=>{
        if(err) throw new Error(err);
        res.json(result);
      })
});
router.put("/:id",(req,res)=>{//mise a jour
  Todo.findByIdAndRemove({_id:req.params.id},req.body,{returnOriginal: false}/*option de ne pas rendre la valeur ancien*/, (err,result)=>{
   if(err) throw new Error(err);
   res.json(result);
  });
})

router.delete("/:id",(req,res)=>{
   Todo.findByIdAndRemove({_id:req.params.id}, (err,result)=>{
    if(err) throw new Error(err);
    res.end();
   });
})

module.exports = router;