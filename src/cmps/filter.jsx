import { useFormRegister } from "../hooks/useFormRegister"

export const Filter = ({ onChangeFilter }) => {
  const [register] = useFormRegister(
    {
      basicPrice: "",
      basicDaysToMake: "",
      rate: ""
    },
    onChangeFilter
  )
  return (
    <form className="filter">
      <section>
        <input {...register("basicPrice", "number")} placeholder="Max Price" />
      </section>
      <section>
        <input {...register("basicDaysToMake", "number")} placeholder="Delivery Time" />
      </section>
      <section>
        <input {...register("rate", "number")} placeholder="Rating" />
      </section>

      <button className="btn btn-reset-filter" onClick={() => register("maxPrice", "")}>reset</button>
    </form>
  )
}
