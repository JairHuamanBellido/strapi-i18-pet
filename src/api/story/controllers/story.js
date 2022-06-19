"use strict";

/**
 *  story controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::story.story", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;
    const entity = await strapi.service("api::story.story").findOne(id, query);
    return entity;
  },
  async find(ctx) {
    const entities = await strapi.service("api::story.story").find(ctx);

    return entities;
  },
}));
