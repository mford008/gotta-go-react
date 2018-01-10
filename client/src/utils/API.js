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
  },
  addUser: function (newUser) {
<<<<<<< HEAD
    console.log('new User called', newUser);
    return axios.post('/auth/signup', newUser);
=======
    console.log('new User called',newUser);
    return axios.post('/api/user/signup', newUser);
>>>>>>> 082f71734be195c32b9dffb7c0d8ecac478ec82c
  }
};
