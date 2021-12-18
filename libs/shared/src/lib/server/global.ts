import { intersection } from 'lodash'

export const removeFields = (obj, fields) => {
  fields.split(' ').forEach(field => {
    delete obj[field]
  })
}

export const doesInclude = (obj, keys) =>
  intersection(Object.keys(obj), keys.split(' ')).length != 0

export const selectFields = (obj, fields) => {
  Object.keys(obj).forEach(key => {
    if (fields.split(' ').indexOf(key) == -1) delete obj[key]
  })
}

export const handledController = controller => (req, res) =>
  controller(req, res).catch(e => res.status(500).send(e.message))
