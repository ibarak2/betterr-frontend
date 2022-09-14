import { useEffect, useState } from "react"

export const useForm = (initialState, callBack) => {
  const [fields, setFields] = useState(initialState)
  useEffect(() => {
    if (callBack) callBack(fields)
  }, [fields])

  const handleChange = ({ target }) => {
    let value = target.value
    const field = target.name
    if (target.type === "checkbox") value = target.checked
    else if (target.type === "number") value = +target.value || ""
    setFields((prevFields) => ({ ...prevFields, [field]: value }))
  }
  return [fields, handleChange, setFields]
}
