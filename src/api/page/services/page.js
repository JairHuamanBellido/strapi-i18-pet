"use strict";

/**
 * page service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::page.page", ({ strapi }) => ({
  async findOne(id, query) {
    const entries = await strapi.db.query("api::page.page").findMany({
      populate: [
        "link",
        "sections",
        "sections.banner_center.heading",
        "sections.stats.heading",
        "sections.stats.image",
        "sections.stats.stats",
        "sections.heading",
        "sections.section_hero.image"
      
      ],

      where: {
        locale: {
          $eq: query.locale,
        },
        link: {
          url: {
            $eq: id,
          },
        },
      },
    });
    return entries[0];
  },
}));
