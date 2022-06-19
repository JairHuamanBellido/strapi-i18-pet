"use strict";

/**
 *  logo controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::logo.logo", ({ strapi }) => ({
  async find(ctx) {
    const response = await strapi.service("api::logo.logo").find();

    return response;
  },
}));
