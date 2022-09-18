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
        <label htmlFor="max-price">Max Price</label>
        <input {...register("maxPrice", "number")} />
      </section>
      <section>
        <label htmlFor="daysToMake">Delivery Time</label>
        <input {...register("daysToMake", "number")} />
      </section>
      <section>
        <label htmlFor="rate">Rating</label>
        <input {...register("rate", "number")} />
      </section>
      {/* <select {...register("inStock")}>
        <option value="">All</option>
        <option value="in-stock">In stock</option>
        <option value="out-of-stock">Out of stock</option>
      </select> */}
    </form>
  )
}
