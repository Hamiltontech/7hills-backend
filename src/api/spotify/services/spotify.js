'use strict';

/**
 * spotify service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spotify.spotify');
