import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 5ee2aa6f9af6aef9ee1954e6ddc51a9154deb9d386984e2e10e6d5168357713b'
  }
});
