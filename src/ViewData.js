const ViewData = {
  buildMapViewData(results) {
    const mapViewData = results
      .map(({ name, position }) => {
        return `${name} : ${ViewData.buildPositionMap(position)}`;
      })
      .join('\n');

    return mapViewData;
  },

  buildPositionMap(position) {
    return '-'.repeat(position);
  },
};

module.exports = ViewData;
