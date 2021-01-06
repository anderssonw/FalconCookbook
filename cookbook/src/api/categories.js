import instance from '.'

const resource = '/api/categories/'

export default {
  getCategoriesOnCharAndFundamental(character, fundamental) {
    return instance.get(resource + character + '/' + fundamental)
  },
  getGuidesInCategory(category) {
    return instance.get(resource + category + '/guides')
  },
}
