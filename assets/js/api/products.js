import api from './index'

const url = {
  products: 'https://api.myjson.com/bins/1gnnec'
}

export default {
  getProducts: async () => {
    try {
      const response = await api.get(url.products)
      return response
    } catch (error) {
      return error
    }
  }
}
