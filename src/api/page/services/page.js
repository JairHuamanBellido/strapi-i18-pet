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
        "sections.section_stats.heading",
        "sections.section_stats.image",
        "sections.section_stats.stats",
        "sections.heading",
        "sections.section_hero.image",
        "sections.section_story.heading",
        "sections.section_story.image",
        "sections.section_story.stories",
        "sections.section_story.stories.person",
        "sections.section_story.stories.person",
        "sections.section_story.stories.person.image",
        "sections.section_story.button",
        "sections.section_story.button.link",
        "sections.section_card_story.stories",
        "sections.section_card_story.stories.image",
        "sections.section_card_story.stories.link_story"
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
