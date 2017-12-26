import axios from 'axios';

export default {
  loadRestrooms: function () {
    return axios.get('/api/restrooms');
  }
};
