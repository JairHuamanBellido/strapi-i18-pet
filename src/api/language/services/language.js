"use strict";

/**
 * language service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::language.language", ({ strapi }) => ({
  async find(query) {
    const entries = await strapi.entityService.findMany(
      "api::language.language",
      {
        ...query,
      }
    );

    return entries;
  },
}));
