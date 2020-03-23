import { useState, useEffect } from 'react'
import axios from 'axios'

const useRequest = url => {
  const [data, setData] = useState()
  const isLoading = !data

  const getData = async () => {
    // const { data: response } = await axios.get(url)
    // setData(response)
  }

  useEffect(() => {
    getData()
  })

  return {
    isLoading,
    data,
  }
}

export default useRequest
