import * as express from 'express';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('build'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`);
});
