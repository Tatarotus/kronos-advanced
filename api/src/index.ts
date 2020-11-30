import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

async function connectToMongoDBAtlas() {
  try {
    await mongoose.connect(
      'mongodb+srv://smre:smre23@cluster0.lhovv.gcp.mongodb.net/kronos_advanced?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
    );
    console.log('Successfully connected to MongoDB Atlas!');
  } catch (err) {
    console.log(err);
  }
}

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
  });
});

app.listen(port);
connectToMongoDBAtlas();
