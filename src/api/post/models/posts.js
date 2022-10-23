'use strict';

const axios = require('axios');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
   lifecycles: {
    async afterCreate(result, data) {
       axios.post('https://api.netlify.com/build_hooks/634f304f77f3d6057b012486');
     },

    async afterUpdate(result, params, data) {
       axios.post('https://api.netlify.com/build_hooks/634f304f77f3d6057b012486');
    },
   }
};
