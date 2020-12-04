import express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
  });
});

router.post('/signin', userController.create);

export default router;
