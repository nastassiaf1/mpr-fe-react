import api from './api';

const postService = {
  getPosts: async () => {
    try {
      const posts = await api.get('/posts');

      return posts.data;
    } catch (err) {
        console.log(err);
    }
  }
};

export default postService;
