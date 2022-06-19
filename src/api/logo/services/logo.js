"use strict";

/**
 * logo service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::logo.logo", ({ strapi }) => ({
  async find() {
    const entry = await strapi.db.query("api::logo.logo").findOne({
      populate: ["image"],
    });

    return entry;
  },
}));
