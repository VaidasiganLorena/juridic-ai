import { subscribeUrl } from "./constants"
import { useState } from "react"

const usePostSubscribe = (onSuccess, onError) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const postSubscribe = async (data) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(subscribeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (response.ok) {
        onSuccess(result)
      } else {
        setError(result)
        onError(result)
      }
    } catch (err) {
      setError(err)
      onError(err)
    } finally {
      setIsLoading(false)
    }
  }

  return { postSubscribe, isLoading, error }
}

export default usePostSubscribe
