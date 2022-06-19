"use strict";

/**
 * link-story service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::link-story.link-story",
  ({ strapi }) => ({
    async findOne(id, query) {
      const entries = await strapi.entityService.findMany(
        "api::link-story.link-story",
        {
          filters: { slug: id },
          ...query,
        }
      );
      return entries[0];
    },

    async find(ctx) {
      const entries = await strapi.entityService.findMany(
        "api::link-story.link-story",
        {
          ...ctx.query,
        }
      );
      console.log(entries);
      return entries;
    },
  })
);
