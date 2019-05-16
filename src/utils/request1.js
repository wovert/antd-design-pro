import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://localhsot:8001/api'

const request1 = (url, params) => {
  return axios({
    method: params.method || 'get',
    url,
    data: qs.stringify(params.data)
  }).then(res => res.data)
}

export default request1;
