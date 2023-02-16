import api from '../config/api'

const productService = {
    getproduct (query) {
        return api.get(`product${query}`)
    }
}

export default productService