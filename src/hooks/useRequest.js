import { useState, useEffect } from 'react'
import axios from 'axios'

const useRequest = url => {
  const [data, setData] = useState()
  const isLoading = !data

  const getData = async setData => {
    const { data: response } = await axios.get(url)
    setData(response)
  }

  useEffect(() => {
    getData(setData)
  }, [])

  return {
    isLoading,
    data,
  }
}

export default useRequest
