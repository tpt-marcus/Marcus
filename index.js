const express = require('express')
const path = require('path')
const app = express();
const port = 3000;
const nunjucks = require('nunjucks');

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
  res.render('.index.njk');
})
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
  res.render('.about.njk');
})
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
  res.render('.contact.njk');
})
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
  res.render('.gallery.njk');
})
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
  res.render('./values.njk');
})
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
  res.render('.gallery.njk');
})