import { useState } from "react"
import { SmallModal } from "./small-modal"

export function GigDataTable() {
  const [daysOpen, setDaysOpen] = useState(false)
  const list = [
    { value: 7, txt: "LAST 7 DAYS" },
    { value: 14, txt: "LAST 14 DAYS" },
    { value: 30, txt: "LAST 30 DAYS" },
    { value: 60, txt: "LAST 2 MONTHS" },
    { value: 90, txt: "LAST 3 MONTHS" },
    { value: 180, txt: "LAST 6 MONTHS" },
  ]
  const showModal = () => {
    setDaysOpen(true)
    console.log("showModal")
  }
  const handleSelect = (ev) => {
    setDaysOpen(false)
    console.log("handleSelect")
  }
  return (
    <div className="data-table">
      <div className="flex space-between table-row table-row-header">
        <div className="flex align-center table-header-container table-cell">
          <h1 className="table-header">Active Gigs</h1>
        </div>
        <div className="flex align-center data-select-container table-cell">
          <SmallModal
            onSelect={handleSelect}
            list={list}
            open={daysOpen}
            id={"days-filter"}
            txt={"LAST 7 DAYS"}
            handleOpenModal={showModal}
          />
        </div>
      </div>
      {/* <tr className="subheader-row">
          <td>
            <label className="fake-check-black">
              <input type="checkbox" className="data-checkbox" />
              <span className="chk-img"></span>
            </label>
          </td>
          <td colSpan={3}>GIG</td>
          <td>
            <span
              className="hint--top-right"
              data-hint="Total number of impressions this Gig received on Fiverr in the last 30 days"
            >
              Impressions
            </span>
          </td>
          <td>
            <span
              className="hint--top-right"
              data-hint="Total number of clicks this Gig received in the last 30 days"
            >
              Clicks
            </span>
          </td>
          <td>
            <span
              className="hint--top-right"
              data-hint="Total number of orders from this Gig in the last 30 days"
            >
              Orders
            </span>
          </td>
          <td>
            <span
              className="hint--top-right"
              data-hint="Cancellation rate: Number of cancelled orders divided by the number of orders from this Gig in the last 30 days"
            >
              Cancellations
            </span>
          </td>
          <td></td>
          <td colSpan={3}></td>
        </tr> */}
    </div>
  )
}
