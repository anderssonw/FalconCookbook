import instance from '.'

const resource = '/api/characters/'

export default {
  getAllCharacters() {
    return instance.get(resource)
  },
}
