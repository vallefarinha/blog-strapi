'use strict';

const axios = require('axios');

module.exports = {
async afterCreate(result, data){
axios.post('https://api.netlify.com/build_hooks/634f304f77f3d6057b012486');
},

async afterUpdate(result, params, data){
  axios.post('https://api.netlify.com/build_hooks/634f304f77f3d6057b012486');
  },
};
