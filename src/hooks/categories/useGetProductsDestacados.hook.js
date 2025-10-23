import { useEffect, useState } from 'react'

import Api from '@/api/Api'

const useGetProductsDestacados = () => {
  const [loading, setLoading] = useState(false)
  const [productsDestacados, setProductsDestacados] = useState([])

  const getProductsDestacados = async () => {
    try {
      setLoading(true)
      const data = await Api.get('/api/productsDestacados')
      const dataJson = await data.json()
      if (dataJson) {
        setProductsDestacados(dataJson)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductsDestacados()
  }, [])
  return { loading, productsDestacados }
}

export { useGetProductsDestacados }
