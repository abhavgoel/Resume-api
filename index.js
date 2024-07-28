const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/getResume', (req, res) => {
    const file = path.resolve("./public/Abhav_Goel.pdf");
    
    res.download(file, (err) => {
        if (err) {
            console.error('Error downloading the file:', err);
            res.status(500).send('Error downloading the file.');
        }
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Resume API listening at PORT: ${PORT}`);
});
