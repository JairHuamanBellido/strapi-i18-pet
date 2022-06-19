"use strict";

/**
 *  link-story controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::link-story.link-story",
  ({ strapi }) => ({
    // Method 3: Replacing a core action
    async findOne(ctx) {
      const { id } = ctx.params;
      const { query } = ctx;
      const entity = await strapi
        .service("api::link-story.link-story")
        .findOne(id, query);
      return entity;
    },
    async find(ctx) {
      const entities = await strapi
        .service("api::link-story.link-story")
        .find(ctx);

      return entities;
    },
  })
);
