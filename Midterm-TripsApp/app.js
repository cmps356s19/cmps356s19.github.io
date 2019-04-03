const express	   =  require('express');
const app		   =   express();

app.use( express.json() );

//Allow serving static files from public folder
app.use( express.static('.') );

//Mount the routes to the app
const routes = require('./routes');
app.use('/api/', routes);

const port = 9090;
app.listen(port, () => {
    const host = "localhost";
    console.log(`App is running @ http://${host}:${port}/`);
});