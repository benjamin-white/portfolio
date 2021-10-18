import chunk from "lodash/chunk";

const pointsFromObject = (obj, partition) => {
  if (typeof obj !== 'object') return []
  const geo   = obj?.children[0]?.geometry
  const verts = geo ? geo.attributes.position.array : []
  return partition ? chunk(verts, geo.attributes.position.itemSize) : verts
}

const convertRange = (value, r1, r2) =>
  (value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0]

const viewPortX = () =>
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

export {
  pointsFromObject,
  convertRange
}