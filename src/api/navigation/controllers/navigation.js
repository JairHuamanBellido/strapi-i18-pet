"use strict";

/**
 *  navigation controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::navigation.navigation",
  ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;

      const entity = await strapi
        .service("api::navigation.navigation")
        .findOne(query);

      return entity;
    },
  })
);
