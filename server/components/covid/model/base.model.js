const mongoose = require('mongoose');
mongoose.connect(process.env.MONGDO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connect DB success');
}); 

export default mongoose;