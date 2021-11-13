import * as express from 'express';
import * as  compression from 'compression';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(compression());
app.use(express.static('build'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`);
});
