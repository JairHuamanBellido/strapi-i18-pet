"use strict";

/**
 * navigation service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::navigation.navigation",
  ({ strapi }) => ({
    async findOne(query) {
      const entries = await strapi.db
        .query("api::navigation.navigation")
        .findMany({
          populate: ["navigation_items", "navigation_items.link"],
          where: {
            locale: {
              $eq: query.locale,
            },
          },
        });
      return entries[0];
    },
  })
);
