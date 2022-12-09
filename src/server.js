const express = require('express');

const routes = require('./routes/routes');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.use('/api', routes);

app.use((req, res, next) => {
    return res.status(404).json({
        message: "Enpoint not found"
    })
});

app.listen(app.get('port'), () => {
    console.log(`server listening on port ${app.get('port')}`);
});