const { Router } = require('express') ;
const {validate} = require('express-validation') ;

const cityController = require('./city.controllers') ;
const { authJwt } = require('../../services/auth.services') ;
const cityValidation = require('./city.validations') ;

const routes = new Router();

routes.post(
  '/',
  authJwt,
  validate(cityValidation.createCity),
  cityController.createCity,
);
routes.get('/:id', authJwt, cityController.getCityById);
routes.get('/', authJwt, cityController.getCitiesList);
routes.patch(
  '/:id',
  authJwt,
  validate(cityValidation.updateCity),
  cityController.updateCity,
);
routes.delete('/:id', authJwt, cityController.deleteCity);


module.exports = routes;
