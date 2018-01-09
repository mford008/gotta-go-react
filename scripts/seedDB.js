// Seeds to go into mLab

const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/gottago2',
  {
    useMongoClient: true
  }
);

let id1 = new mongoose.Types.ObjectId;
let id2 = new mongoose.Types.ObjectId;
let id3 = new mongoose.Types.ObjectId;
let id4 = new mongoose.Types.ObjectId;

const restroomSeed = [
  {
    name: 'Paradise Park',
    location: '6334 San Pablo Ave, Oakland, CA 94608',
    category: 'Restaurant',
    lat: 37.8468391,
    lng: -122.28465549999999,
    comments: [{
      comment: 'Nice on a sunny day.',
      _id: id1
    }],
    createdAt: Date.now
  },
  {
    name: 'Chevron',
    location: '2996 Telegraph Ave, Berkeley, CA 94705',
    category: 'Gas Station',
    lat: 37.8194074,
    lng: -122.26707799999997,
    comments: [{
      comment: 'Not always clean.',
      _id: id2
    }, {
      comment: 'Reliable',
      _id: id3
    }],
    createdAt: Date.now
  },
  {
    name: 'Claremont Branch Library',
    location: '2940 Benvenue Ave, Berkeley, CA 94705',
    category: 'Other',
    lat: 37.8566035,
    lng: -122.2543607,
    comments: [{
      comment: 'Check open hours.',
      _id: id4
    }],
    createdAt: Date.now
  }
];

db.Restroom
  .remove({})
  .then(() => db.Restroom.collection.insertMany(restroomSeed))
  .then(data => {
    console.log(data.insertedIds.length + ' records inserted');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
