import axios from 'axios';

export default {
  loadRestrooms: function () {
    return axios.get('/api/restrooms');
  },
  addLoo: function (newLoo) {
    console.log(newLoo);
    return axios.post('/api/restrooms', newLoo);
  }
  // loadComments: function () {
  //   return axios.get('/api/comments');
  // }
};
