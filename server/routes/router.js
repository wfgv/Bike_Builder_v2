const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add component
 *  @method GET /add-component
 */
route.get('/add-component', services.add_component)

/**
 *  @description for update component
 *  @method GET /update-component
 */
route.get('/update-component', services.update_component)


// API
route.post('/api/components', controller.create);
route.get('/api/components', controller.find);
route.put('/api/components/:id', controller.update);
route.delete('/api/components/:id', controller.delete);


module.exports = route