import { useState } from "react"
import { GigTableSubheader } from "./gig-table-subheader"
import { SmallModal } from "./small-modal"
import { GigTableDetails } from "./gig-table-details"
import { sortListByDays } from "../services/back-office.service"
import { useSelector } from "react-redux"
export function GigDataTable({
  orders,
  title,
  subheaders,
  isBuyer,
  onAccept,
  onCancel,
  onReady,
  onDelivered,
}) {
  const [daysOpen, setDaysOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const showModal = () => {
    setDaysOpen(true)
  }

  const handleSelect = (ev) => {
    setDaysOpen(false)
  }

  const onOpenMenu = () => {
    console.log("MENU", menuOpen)
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="data-table">
      <div className="flex table-row table-row-header table-sort-by-days">
        <div className="flex align-center table-cell subheader-one">
          <h1 className="table-header">{title}</h1>
        </div>
        {/* <div className="flex align-center data-select-container table-cell subheader subheader-one">
          <SmallModal
            onSelect={handleSelect}
            list={sortListByDays}
            open={daysOpen}
            id={"days-filter"}
            txt={"LAST 7 DAYS"}
            handleOpenModal={showModal}
          />
        </div> */}
      </div>
      {/* <GigTableSubheader /> */}

      {orders &&
        orders.map((order, idx) => {
          return (
            <GigTableDetails
              key={idx}
              order={order}
              isBuyer={isBuyer}
              onAccept={onAccept}
              onCancel={onCancel}
              onReady={onReady}
              onDelivered={onDelivered}
              handleOpenMenu={onOpenMenu}
              menuOpen={menuOpen}
            />
          )
        })}
      <div
        className="open-listener"
        onClick={menuOpen ? onOpenMenu : undefined}
        style={{
          display: `${!menuOpen ? "none" : ""}`,
        }}
      ></div>
    </div>
  )
}
