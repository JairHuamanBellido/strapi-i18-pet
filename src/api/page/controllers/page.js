"use strict";

/**
 *  page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;
    console.log(ctx);
    const entity = await strapi.service("api::page.page").findOne(id, query);

    return this.transformResponse(entity);
  },
  async find(ctx) {
    const { query } = ctx;
    const { path } = query;
    const entity = await strapi.service("api::page.page").findOne(path, query);

    return entity;
  },
}));
