import mongoose from 'mongoose';
import User from '../models/user.model';

const userController = {
  async create(req: any, res: any) {
    try {
      const { username, password } = req.body;
      const user = new User({ name, password });
      return res.json({ hello: 'Hello from Controller' });
    } catch (err) {
      console.log(err);
      return res.status(500).send();
    }
  },
  async delete(req: any, res: any) {
    try {
      return res.json({ hello: 'Hello from Controller' });
    } catch (err) {
      console.log(err);
      return res.status(500).send();
    }
  },
};

export default userController;
