import { useEffect } from "react"

export default function Error404() {

  // Redirect to home when load
  useEffect(() => {
    window.location.replace("/")
  }, [])

  return ""
}