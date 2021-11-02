import express from './server/node_modules/@types/express';

const app: express.Express = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
	res.send('ぱたお');
})

app.use('/api', require('./api/hello'));

app.listen(PORT, () => {
	console.log(`express start on ${PORT}`);
});