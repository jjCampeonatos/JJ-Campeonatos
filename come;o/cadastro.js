import express from ('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello word');
});

app.listen3000,() => {
    console.log('servidor rodando')
}

function require() {
    
}