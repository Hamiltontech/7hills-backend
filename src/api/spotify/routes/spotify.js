'use strict';

/**
 * spotify router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::spotify.spotify');
