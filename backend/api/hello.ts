import express from 'express';

const router:express.Router = express.Router();

router.get('/', (req, res) => {
	console.log('ねぜ');
res.send('Hello World');
});

module.exports = router;