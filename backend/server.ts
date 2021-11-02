import express from 'express';

const app: express.Express = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
	res.send('ぱたお');
})

app.use('/api', require('./api/hello'));

app.listen(PORT, () => {
	console.log(`express start on ${PORT}`);
});