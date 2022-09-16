import { useFormRegister } from "../hooks/useFormRegister"

export const Filter = ({ onChangeFilter }) => {
  const [register, handleChange, filterBy] = useFormRegister(
    {
      name: "",
      minPrice: "",
      maxPrice: "",
      inStock: "available",
      labels: [],
    },
    onChangeFilter
  )
  
  return <div className="filter">Hello from Filter</div>
}
