"use strict";

/**
 * story service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::story.story", ({ strapi }) => ({
  async findOne(id, query) {
    const entries = await strapi.entityService.findMany("api::story.story", {
      filters: { slug: id },
      populate: ["image",  "person.image"],
      ...query,
    });
    return entries[0];
  },

  async find(ctx) {
    const entries = await strapi.entityService.findMany("api::story.story", {
      ...ctx.query,
    });
    return entries;
  },
}));
