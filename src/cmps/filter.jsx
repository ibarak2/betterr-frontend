import { useFormRegister } from "../hooks/useFormRegister"
import { useState } from "react"
import { NavLink } from "react-router-dom"

// export const Filter = ({ onChangeFilter }) => {
//   const [maxPriceOpen, setMaxPriceOpen] = useState(false)
//   const [maxDeliveryOpen, setMaxDeliveryOpen] = useState(false)
//   const [maxRatingOpen, setMaxRatingOpen] = useState(false)
//   const [register, setFields] = useFormRegister(
//     {
//       basicPrice: "",
//       basicDaysToMake: "",
//       rate: "",
//     }, onChangeFilter)

//   const BudgetInputs = (filter) => (
//     <section className="form-budget">
//       <label htmlFor="MIN.">MIN.</label>
//       <input
//         id="MIN."
//         {...register(`minPrice`, `number`)}
//         placeholder="Any"
//       />
//       <label htmlFor="MAX.">MAX.</label>
//       <input
//         id="MAX."
//         {...register(`maxPrice`, `number`)}
//         placeholder="Any"
//       />
//     </section>
//   )

//   const DeliveryTime = () => (
//     <section className="form-budget form-delivery">
//       <label htmlFor={"express"}>{"Express 24H"}</label>
//       <input {...register(`express`, `radio`)} />
//       <label htmlFor={"threeDays"}>{"up to 3 days"}</label>
//       <input {...register(`threeDays`, `radio`)} />
//       <label htmlFor={"sevenDays"}>{"up to 7 days"}</label>
//       <input {...register(`sevenDays`, `radio`)} />
//       <label htmlFor={"any"}>{"Anytime "}</label>
//       <input {...register(`any`, `radio`)} />
//     </section>
//   )
//   const filterSettings = [
//     {
//       text: "Budget",
//       handler: () => setMaxPriceOpen(!maxPriceOpen),
//       state: maxPriceOpen,
//       placeholder: "Any",
//       name: "Budget",
//       cmp: <BudgetInputs />,
//     },
//     {
//       text: "Delivery Time",
//       handler: () => setMaxDeliveryOpen(!maxDeliveryOpen),
//       state: maxDeliveryOpen,
//       placeholder: "Delivery Time",
//       name: "basicDaysToMake",
//       cmp: <DeliveryTime />,
//     },
//     {
//       text: "Rating",
//       handler: () => setMaxRatingOpen(!maxRatingOpen),
//       state: maxRatingOpen,
//       placeholder: "Rating",
//       name: "rate",
//       type: "number",
//     },
//   ]
//   const filters = filterSettings.map((filter, indx) => (
//     <div
//       key={indx}
//       className="flex align-center fiverr-style-filter"
//       onClick={filter.state ? undefined : filter.handler}
//     >
//       <div className="text">{filter.text}</div>
//       <span className={`filter-chevron ${filter.state && "open"}`}>
//         <ChevronSvgIcon />
//       </span>
//       <form
//         className="form-modal"
//         style={{
//           display: `${filter.state ? "flex" : "none"}`,
//         }}
//       >
//         {filter.cmp}
//         {/* <section>
//           <label htmlFor={filter.name}>{filter.text}</label>
//           <input
//             {...register(`${filter.name}`, `${filter.type}`)}
//             placeholder={`${filter.placeholder}`}
//           />
//         </section> */}
//       </form>
//     </div>
//   ))

//   return (
//     <section className="flex filter-options">
//       {filters}
//       {filterSettings.map((st, indx) => (
//         <div
//           key={indx}
//           className="open-listner"
//           onClick={st.state ? st.handler : undefined}
//           style={{
//             display: `${!st.state ? "none" : ""}`,
//           }}
//         ></div>
//       ))}
//       <button
//         className="btn-reset-filter"
//         onClick={() =>
//           setFields({ basicPrice: "", basicDaysToMake: "", rate: "" })
//         }
//       >
//         reset filter
//       </button>
//     </section>
//   )
// }
const ChevronSvgIcon = () => {
  return (
    <svg
      width="11"
      height="7"
      viewBox="0 0 11 7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
    </svg>
  )
}

export function Filter({ onChangeFilter }) {
  const [register, setFields, fields] = useFormRegister(
    {
      minPrice: "",
      maxPrice: "",
      basicDaysToMake: "",
      sortBy: "",
    },
    onChangeFilter
  )
  const [isOpen, setIsOpen] = useState({
    delivery: "",
    budget: "",
    sort: "",
  })

  const handleToggle = (field) => {
    if (field === "delivery") {
      setIsOpen({
        delivery: "filter-open",
        budget: "",
        sort: "",
      })
    }
    if (field === "budget") {
      setIsOpen({
        delivery: "",
        budget: "filter-open",
        sort: "",
      })
    }
    if (field === "sort") {
      setIsOpen({
        delivery: "",
        budget: "",
        sort: "filter-open",
      })
    }
    if (field === "close") {
      setIsOpen({
        delivery: "",
        budget: "",
        sort: "",
      })
    }
  }
  const handleClear = () => {
    setFields({
      minPrice: "",
      maxPrice: "",
      basicDaysToMake: "",
      sortBy: "",
    })
    handleToggle("close")
  }
  return (
    <section className="flex gigs-filter-main">
      <div className="flex left-filter-wrapper">
        <div className={`floating-menu ${isOpen.delivery}`}>
          <div
            className="menu-title filter-menu"
            onClick={() => handleToggle("delivery")}
          >
            Delivery Time
            <span className="chevron-icon">
              <ChevronSvgIcon />
            </span>
          </div>
          <div className="menu-content">
            <div
              className="flex radio-list"
              onClick={() => handleToggle("close")}
            >
              <div className="flex radio-item-wrapper">
                <label className="flex radio-item" htmlFor="24H">
                  <input
                    {...register(`basicDaysToMake`, `radio`, "1")}
                    type="radio"
                    id="24H"
                    name="basicDaysToMake"
                    value="1"
                  />
                  Express 24H
                </label>
              </div>

              <div className="flex radio-item-wrapper">
                <label className="flex radio-item" htmlFor="3D">
                  <input
                    {...register(`basicDaysToMake`, `radio`, "3")}
                    type="radio"
                    id="3D"
                    name="basicDaysToMake"
                    value="3"
                  />
                  Up to 3 days
                </label>
              </div>

              <div className="flex radio-item-wrapper">
                <label className="flex radio-item" htmlFor="7D">
                  <input
                    {...register(`basicDaysToMake`, `radio`, "7")}
                    type="radio"
                    id="7D"
                    name="basicDaysToMake"
                    value="7"
                  />
                  Up to 7 days
                </label>
              </div>

              <div className="flex radio-item-wrapper">
                <label className="flex radio-item" htmlFor="Any">
                  <input
                    {...register(`basicDaysToMake`, `radio`, "")}
                    type="radio"
                    id="Any"
                    name="basicDaysToMake"
                    value=""
                    // defaultChecked
                  />
                  Anytime
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className={`floating-menu ${isOpen.budget}`}>
          <div
            className="menu-title filter-menu"
            onClick={() => handleToggle("budget")}
          >
            Budget
            <span className="chevron-icon">
              <ChevronSvgIcon />
            </span>
          </div>
          <div className="menu-content budget-menu">
            <div className="flex budget-filter">
              <div className="input-wrapper">
                <label>MIN.</label>
                <input
                  {...register(`minPrice`, `number`)}
                  className="min-price"
                  placeholder="Any"
                  min="0"
                  max="50000"
                />
                <i>$</i>
              </div>

              <div className="input-wrapper">
                <label>MAX.</label>
                <input
                  {...register(`maxPrice`, `number`)}
                  className="max-price"
                  placeholder="Any"
                  min="0"
                  max="50000"
                />
                <i>$</i>
              </div>
            </div>

            <div className="button-row-wrapper">
              <div className="flex button-row">
                <span onClick={() => handleClear()} className="clear-all">
                  Clear All
                </span>
                <span onClick={() => handleToggle("close")} className="apply">
                  Apply
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex right-filter-wrapper sort-by-wrapper">
        <span onClick={() => handleToggle("sort")} className="sort-by-title">
          Sort by
        </span>
        <div
          onClick={() => handleToggle("sort")}
          className={`floating-menu sort-by-floating ${isOpen.sort}`}
        >
          <div className="menu-title filter-menu">
            <span className="filter-menu-value">
              {`${
                fields.sortBy === "rating" ? "Most Rated" : "Newest Arrivals"
              }`}
            </span>
            <span className="chevron-icon">
              <ChevronSvgIcon />
            </span>
          </div>
          <div className="menu-content sort-filter">
            <div className="labels-list" onClick={() => handleToggle("close")}>
              <label htmlFor="recommended">Most Rated</label>
              <input
                {...register(`sortBy`, `radio`, "rating")}
                id="recommended"
                value="rating"
              />
              <label htmlFor="newest-arrivals">Newest Arrivals</label>
              <input
                {...register(`sortBy`, `radio`, "new-arrival")}
                id="newest-arrivals"
                value="new-arrival"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleToggle("close")}
        className={
          isOpen.budget || isOpen.delivery || isOpen.sort ? "open-listener" : ""
        }
      ></div>
    </section>
  )
}
