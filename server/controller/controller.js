var Componentdb = require('../model/model');

// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new component
    const component = new Componentdb({
        category : req.body.category,
        brand : req.body.brand,
        model: req.body.model,
        colour : req.body.colour,
        rating : req.body.rating,
        price : req.body.price
    })

    // save component in the database
    component
        .save(component)
        .then(data => {
            //res.send(data)
            res.redirect('/add-component');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all component/ retrive and return a single component
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Componentdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found component with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving component with id " + id})
            })

    }else{
        Componentdb.find()
            .then(component => {
                res.send(component)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving component information" })
            })
    }

    
}

// Update a new idetified component by component id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Componentdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update component with ${id}. Maybe component not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update component information"})
        })
}

// Delete a component with specified component id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Componentdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete component with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "component was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete component with id=" + id
            });
        });
}