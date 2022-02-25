const axios = require('axios');
const getUser = async (param = 'sureshalagarsamy') => {
  try {
    const repos = await axios.get(
      `https://api.github.com/users/${param}`
    );
    return repos.data;
  } catch (error) {
    return [];
  }
};

// getRepos().then((repositories) => console.log(repositories));

module.exports = {
    getUser
}