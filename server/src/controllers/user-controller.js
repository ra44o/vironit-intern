const service = require('../services/user-service');
// const service = require('../services/mysql-user-service');

class UserController {
  constructor() { }

  async getAllUsers(req, res) {
    try {
      const result = await service.getAll();
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  }

  async getCertainUser(req, res) {
    try {
      const result = await service.getOne(req.params.login);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  }

  async createUser(req, res) {
    try {
      const result = await service.create(req.body);
      res.status(201).send(result);
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  }

  async login(req, res) {
    try {
      const result = await service.login(req.body.login, req.body.password);
      res.status(200).send(result);
    } catch (err) {
      res.status(401).send({ msg: err.message });
    }
  }

  async refresh(req, res) {
    try {
      const result = await service.refresh(req.body.refreshToken);
      res.status(200).send(result);
    } catch (err) {
      // res.status(403).send({ msg: err.message, err: err });
      res.status(403).send({ msg: err.message });
    }
  }

  async updateUser(req, res) {
    try {
      const result = await service.update(req.params.id, req.body);
      res.status(201).send(result);
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const result = await service.del(req.params.id);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  }
}

module.exports = UserController;