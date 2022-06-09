const HTTPStatus = require("http-status");

const City = require("./city.model");

async function createCity(req, res) {
  try {
    const city = await City.createPost(req.body);
    return res.status(HTTPStatus.CREATED).json(city);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

async function getCityById(req, res) {
  try {
    const city = await City.findById(req.params.id);
    return res.status(HTTPStatus.OK).json(city.toJSON());
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

async function getCitiesList(req, res) {
  const limit = parseInt(req.query.limit, 0);
  const skip = parseInt(req.query.skip, 0);
  try {
    const cities = await City.list({ limit, skip });
    return res.status(HTTPStatus.OK).json(cities);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

async function updateCity(req, res) {
  try {
    const city = await City.findById(req.params.id);
    Object.keys(req.body).forEach(key => {
      city[key] = req.body[key];
    });

    return res.status(HTTPStatus.OK).json(await city.save());
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

async function deleteCity(req, res) {
  try {
    const city = await City.findById(req.params.id);
   

    await city.remove();
    return res.sendStatus(HTTPStatus.OK);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

module.export = {
  getCityById,
  getCitiesList,
  deleteCity,
  createCity,
  updateCity
};
