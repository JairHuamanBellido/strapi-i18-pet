module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    event.params.data.url = `/${data.slug}`;
  },
};
