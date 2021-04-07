import axios from './axiosConfig' // some http client lib

const endpoint = process.env.REACT_APP_BACKEND_SERVICE_URI

export default {
  getAllProducts () {
      return axios.get(endpoint + 'api/products')
      .then(response => {
        console.log(`api client fetched ${response.data.length} items`)
        return response.data
      }).catch(err => {
        console.error(err.message)
        throw err
      })
    }, 
  
  getProductById (id) {
      return axios.get(endpoint + "api/products/" + id)
      .then(response => {
        return response.data
      }).catch(err => {
        console.error(err.message)
        throw err
      })
    },
    getReviewsByProductId(id){
        return axios.get(endpoint + "api/products/" + id + "/reviews/")
        .then(response => {
            console.log(`api client fetched ${response.data.length} items`)
            return response.data
        }).catch(err => {
            console.error(err.message)
            throw err
        })
    },
    postLogin(Username, Password){
      return axios.post(endpoint + "api/login/",
      {
        username: Username,
        password: Password,
      })
    },
    postRegister(Username, Password){
      return axios.post(endpoint + "api/register/",{
        username: Username,
        password: Password,
      })
      
    }


}