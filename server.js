// const path = require('path');
const dotenv = require('dotenv')
const express = require('express')
const next = require('next')
const compression = require('compression')

dotenv.config()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = process.env.NODE_PORT || 3000
app
  .prepare()
  .then(() => {
    const server = express()
    server.use(compression())
    // const options = {
    //   root: path.join(__dirname, '/static'),
    //   headers: {
    //     'Content-Type': 'text/plain;charset=UTF-8',
    //   }
    // };

    // server.get('/work/:id', (req, res) => {
    //   const actualPage = `/${req.params.id}`
    //   app.render(req, res, actualPage)
    // })

    // server.get('/robots.txt', (req, res) => (
    //   res.status(200).sendFile('robots.txt', options)
    // ));

    // server.get('/sitemap.xml', (req, res) => (
    //   res.status(200).sendFile('sitemap.xml', options)
    // ));

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
