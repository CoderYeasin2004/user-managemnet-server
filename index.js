import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (rer,res) => {
    res.send('user is comming soon')
});


const user = [
    {id: 1, name: "Julfikar", email: 'julfikar@gmail.com'},
    {id: 1, name: "afjal", email: 'afjal@gmail.com'},
    {id: 1, name: "mahin", email: 'mahin@gmail.com'}
]

app.get('/user', (req, res) => {
    res.send(user)
});
app.listen(PORT, () => [
    console.log(`Server is running on port ${PORT}`)
])
