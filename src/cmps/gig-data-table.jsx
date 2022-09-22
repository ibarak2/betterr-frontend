import { useState } from "react"
import { GigTableSubheader } from "./gig-table-subheader"
import { SmallModal } from "./small-modal"
import { GigTableDetails } from "./gig-table-details"
import { sortListByDays } from "../services/back-office.service"
import { useSelector } from "react-redux"
export function GigDataTable({ orders, title, subheaders, isBuyer, onAccept, onCancel, onReady, onDelivered }) {
  const [daysOpen, setDaysOpen] = useState(false)

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
        <div className="flex align-center table-cell subheader-one">
          <h1 className="table-header">{title}</h1>
        </div>
        <div className="flex align-center data-select-container table-cell subheader subheader-one">
          <SmallModal
            onSelect={handleSelect}
            list={sortListByDays}
            open={daysOpen}
            id={"days-filter"}
            txt={"LAST 7 DAYS"}
            handleOpenModal={showModal}
          />
        </div>
      </div>
      <GigTableSubheader />

      {orders && orders.map(order => {
        return <GigTableDetails
          order={order}
          isBuyer={isBuyer}
          onAccept={onAccept}
          onCancel={onCancel}
          onReady={onReady}
          onDelivered={onDelivered}
        />
      })}

    </div>
  )
}
