const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const database = require('./database');
const routes = require('./routes');


app.prepare()
    .then(() => {
        const server = express();

        server.use(bodyParser.urlencoded({ extended: true }));
        server.use(bodyParser.json());

        server.get('/posts/:id', (req, res) => {
            const actualPage = '/post'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
          })

        server.get('/genres/:category', (req, res) => {
            const actualPage = '/category'
            const queryParams = { category: req.params.category }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })
        
        database().then(() => {
            console.log('connected');
            server.listen(3000, err => {
                if (err) throw err
                console.log('> Ready on http://localhost:3000')
            })
        })

        server.use('/api/auth', routes.auth)
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })
    
//   On Windows, NODE_ENV=production will not work by default. One solution is to install the npm module cross-env into your app. Then update the start script like this: "start": "cross-env NODE_ENV=production node server.js"