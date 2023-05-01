// followed a tutorial for some of this and also worked with mentor Mark

const express = require('express')
const app = express()
const bodyParser = require('body-parser') // middleware that parses the request payload
const MongoClient = require('mongodb').MongoClient
const { nanoid } = require('nanoid')
// ^ the documentation for this module calls for destructuring. this is the same as below:
// const nanoid = require('nanoid').nanoid

var db, collection;

const url = "mongodb+srv://menacingcoder:resilientgirlie2023@week11projects.gej0zkf.mongodb.net/?retryWrites=true&w=majority";
const dbName = "shortUrls";

// continue to stick MongoDB for this

// for EJS update favorite to include icon and conditional statement of if true display icon or could have a filled in vs solid icon
// also add trash/delete button

app.listen(3000, () => {
  // connecting to external Mongo database
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if(error) {
            throw error;
        }
        db = client.db(dbName);
        console.log("Connected to `" + dbName + "`!");
    });
});

// taking ejs files/compiling -- spitting out HTML
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true})) // default setting
app.use(bodyParser.json())
app.use(express.static('public'))

// create would be getting link from user
// reading entire table
// updating - adding favorite option, put star

app.get('/', (req, res) => {
  db.collection('links')
  // getting all messages in collection 
  .find()
  // parsing messages into an array
  .toArray((err, result) => {
    // if something goes wrong, log error
    if (err) return console.log(err)
    // if no error, successful -- calls render function to render ejs file and display all links (array)
    res.render('index.ejs', {links: result})
  })
})


app.post('/shortUrls', (req, res) => {
  // req.body.name is the path to what the client's sending you
  // this is similar to the models section/ schema 
  // favorites would be true or false
  // {full: req.body.full, short: req.body.short, favorites: false} - see if mongo documentation supports putting in type: String but it's likely not possible since mongDB is barebares, not as much functionality as mongoose

  const shortId = nanoid(5)

  // /u - for url
  console.log(req.body)
  db.collection('links').insertOne({full: req.body.fullUrl, shortId, favorite: false}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    // refreshing the page so new object aka data is displayed
    res.redirect('/')
  })
})

app.get('/u/:shortId', (req, res) => {


  db.collection('links')
  // finding the link with the shortId which matches the req.params.short
  .findOne({shortId: req.params.shortId}, (err, link) => {
    console.log(link)
    // if something goes wrong, log error
    if (err) return console.log(err)
    // if no error, successful -- calls render function to render ejs file and display all links (array)
    res.redirect(link.full)
  })
})


// put will be almost identical to savage

// eventlistener for the star icon .fa-star
// if true --> turn false, if false --> turn true
// should be able to get that done server side but can be done client side
// .classList.contains('fa-solid') --> false; 
// fetch in main.js method: put, what's the URL going to be? Leon likes them all to be a link app.put('/link') (refer to savage db.findOneAndUpdate())
// in savage the thing might be called element
app.put('/links', (req, res) => {
  db.collection('links')
  // full: req.body.full, short: req.body.short
  .findOneAndUpdate({'shortId': req.body.shortId}, {
    $set: {
      'favorite': req.body.favorite 
    }
  },
   (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/links', (req, res) => {
  db.collection('links').findOneAndDelete({'shortId': req.body.shortId}, (err, result) => {
    if (err) return res.send(500, err)
    console.log('shortId: %s', req.body.shortId)
    res.send('Message deleted!')
  })
})
