const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/gottago2',
  {
    useMongoClient: true
  }
);

const restroomSeed = [
  {
    name: 'Paradise Park',
    location: '6334 San Pablo Ave, Oakland, CA 94608',
    category: 'Restaurant',
    comments: [
      {
        ref: 'Good food'
      }
    ],
    createdAt: Date.now,
    rating: 4,
    verified: false,
    hours: '7AM - 8PM'
  },
  {
    name: 'Chevron',
    location: '2996 Telegraph Ave, Berkeley, CA 94705',
    category: 'Gas Station',
    comments: [
      {
        ref: 'good gas prices'
      }
    ],
    createdAt: Date.now,
    rating: 3,
    verified: false,
    hours: 'unknown'
  },
  {
    name: 'Claremont Branch Library',
    location: '2940 Benvenue Ave, Berkeley, CA 94705',
    category: 'Other',
    comments: [
      {
        ref: 'Super quiet'
      }
    ],
    createdAt: Date.now,
    rating: 4,
    verified: false,
    hours: '12pm-8pm'
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
