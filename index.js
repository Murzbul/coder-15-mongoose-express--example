import express from "express";
import mongoose from "mongoose";
import UserService from "./services/userService.js";

try
{
    const URL = 'mongodb+srv://admin:admin123@coder.lsvnjyx.mongodb.net/test';
      await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    const app = express();
    app.use(express.json());

    app.get("/", (req, res) => {
        res.send( { message: 'Welcome to my APP.'} );
    });

    const userPrefix = '/api/users';

    app.post(userPrefix, async (req, res) => {
        const service = new UserService();
        const data = await service.create(req.body);

        res.send({ data });
    });

    app.get(`${userPrefix}/:id`, async (req, res) => {
        const service = new UserService();
        const data = await service.getOne(req.params.id);

        res.send({ data });
    });

    app.get(userPrefix, async (req, res) => {
        const service = new UserService();
        const data = await service.getAll();

        res.send({ data });
    });

    app.put(`${userPrefix}/:id`, async (req, res) => {
        const service = new UserService();
        const data = await service.update(req.body, req.params.id);

        res.send({ data });
    });

    app.delete(`${userPrefix}/:id`, async (req, res) => {
        const service = new UserService();
        const data = await service.deleteOne(req.params.id);

        res.send({ data });
    });

    const PORT = 8080;

    app.listen(PORT, () => {
        console.log(`Conectado al puerto: ${PORT}`);
    });
}
catch (e) {

}
