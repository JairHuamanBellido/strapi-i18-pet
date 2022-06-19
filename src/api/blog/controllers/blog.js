"use strict";

/**
 *  blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
  // Method 3: Replacing a core action
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;
    const entity = await strapi.service("api::blog.blog").findOne(id, query);
    return entity;
  },
  async find(ctx) {
    const entities = await strapi.service("api::blog.blog").find(ctx);

    return entities;
  },
}));
