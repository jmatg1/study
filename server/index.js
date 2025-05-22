const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors()); // разрешить CORS для Angular
app.use(bodyParser.json());

// Пример API
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Привет от Node.js!' });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
