import { useFormRegister } from "../hooks/useFormRegister"

export const Filter = ({ onChangeFilter }) => {
  const [register] = useFormRegister(
    {
      maxPrice: "",
      daysToMake: "",
      rate: "",
      category: ""
    },
    onChangeFilter
  )
  return (
    <form className="filter">
      <section>
        <input {...register("maxPrice", "number")} placeholder="Max Price" />
      </section>
      <section>
        <input {...register("daysToMake", "number")} placeholder="Delivery Time" />
      </section>
      <section>
        <input {...register("rate", "number")} placeholder="Rating" />
      </section>

      <button className="btn btn-reset-filter" onClick={register("maxPrice", "")}>reset</button>
      {/* <select {...register("inStock")}>
        <option value="">All</option>
        <option value="in-stock">In stock</option>
        <option value="out-of-stock">Out of stock</option>
      </select> */}
    </form>
  )
}
