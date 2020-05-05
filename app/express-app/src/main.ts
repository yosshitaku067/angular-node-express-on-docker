import * as express from 'express';
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.redirect('/angular-app/');
});

app.use(express.static('www'));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});