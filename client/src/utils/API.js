import axios from 'axios';

export default {
  loadRestrooms: function () {
    return axios.get('/api/restrooms');
  },
  addLoo: function (newLoo) {
    console.log(newLoo);
    return axios.post('/api/restrooms', newLoo);
  },
  newComment: function (id, comment) {
    console.log(comment);
    return axios.post('/api/restrooms/' + id, {comment: comment});
  }
};
