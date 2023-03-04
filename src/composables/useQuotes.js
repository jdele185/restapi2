import { ref } from 'vue'
import useApi from '@/composables/useApi'

const quotes = ref( value: [])
const api = useApi()
const useQuotes = () => {
    const fetchQuotes = async () => {
        const response = await api.instance.get( url: 'https://zenquotes.io/api/quotes')
     }
  return { quotes, fetchQuotes }
}

export default useQuotes
