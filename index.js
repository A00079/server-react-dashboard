const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

// If Production Mode On
if (process.env.NODE_ENV === 'production') {

  app.use('/',express.static(path.join(__dirname, 'client/build')));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
  
  app.use("/portal",express.static(path.join(__dirname, 'portal/build')));
  app.get("/portal/*", (req, res) => {
    res.sendFile(path.join(__dirname, 'portal/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});