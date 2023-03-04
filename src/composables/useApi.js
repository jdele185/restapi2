import axios from 'axios'
import { ref } from 'vue'

const instance = axios.create({
    baseURL: 'https://zenquotes.io/api/quotes',
})


const useApi = () => { 
    return { instance }
}

export default useApi