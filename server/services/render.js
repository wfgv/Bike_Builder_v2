const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('https://3000-gold-bobcat-s6l1u3ti.ws-us03.gitpod.io/api/components')
        .then(function(response){
            res.render('index', { components : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_component = (req, res) =>{
    res.render('add_component');
}

exports.update_component = (req, res) =>{
    axios.get('https://3000-gold-bobcat-s6l1u3ti.ws-us03.gitpod.io/api/components', { params : { id : req.query.id }})
        .then(function(componentdata){
            res.render("update_component", { component : componentdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}