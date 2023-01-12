'use strict';

/**
 * spotify controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::spotify.spotify');
