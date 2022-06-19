"use strict";

/**
 * blog service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::blog.blog", ({ strapi }) => ({
  async findOne(id, query) {
    const entries = await strapi.entityService.findMany("api::blog.blog", {
      filters: { slug: id },
      ...query,
    });
    return entries[0];
  },

  async find(ctx) {
    const entries = await strapi.entityService.findMany("api::blog.blog", {
      ...ctx.query,
    });
    console.log(entries);
    return entries;
  },
}));
