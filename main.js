const express = require('express');
const app = express();
app.use(express.json()); // pour parser les données JSON dans les requêtes POST

app.post('/posts', async (req, res) => {
    try {
        const content = req.body.content; // récupération du contenu du post
        const response = await fetch('https://example.com');
        const data = await response.text();
        if (data.includes(content)) {
            res.status(409).send('True');
        } else {
            res.send('False');
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(3000, () => {
    console.log('API en écoute sur le port 3000');
});
