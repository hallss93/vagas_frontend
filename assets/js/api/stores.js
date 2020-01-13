import api from './index'

const url = {
  stores: 'https://api.myjson.com/bins/nher8'
}

export default {
  getStores: async () => {
    try {
      const response = await api.get(url.stores)
      return response
    } catch (error) {
      return error
    }
  }
}
