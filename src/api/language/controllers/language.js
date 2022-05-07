"use strict";

/**
 *  language controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::language.language",
  ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;

      const entity = await strapi.service("api::language.language").find(query);

      return entity;
    },
  })
);
