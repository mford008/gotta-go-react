import axios from 'axios';

export default {
  loadRestrooms: function () {
    return axios.get('/api/restrooms');
  },
  loadComments: function () {
    return axios.get('/api/comments');
  }
};
