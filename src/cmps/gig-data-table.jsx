import { useState } from "react"
import { OpenModalBtn } from "./open-modal-btn"
import { SmallModal } from "./small-modal"

export function GigDataTable() {
  const [daysOpen, setDaysOpen] = useState(false)
  const list = [
    { value: 7, txt: "7 DAYS" },
    { value: 14, txt: "14 DAYS" },
    { value: 30, txt: "30 DAYS" },
    { value: 60, txt: "2 MONTHS" },
    { value: 90, txt: "3 MONTHS" },
    { value: 180, txt: "6 MONTHS" },
  ]
  const showModal = () => {
    setDaysOpen(true)
    console.log("showModal")
  }
  const handleSelect = (ev) => {
    setDaysOpen(true)
    console.log("handleSelect")
  }
  return (
    <table className="data-table">
      <thead>
        <tr className="data-row">
          <td colSpan={5} className="data-header">
            Active Gigs
          </td>
          <td className="data-header data-header-select" colSpan={6}>
            <div className="flex data-select-container">
              <OpenModalBtn
                id={"days-filter"}
                txt={"LAST 7 DAYS"}
                handleOpenModal={showModal}
              />
              <SmallModal onSelect={handleSelect} list={list} open={daysOpen} />
            </div>
          </td>
        </tr>
        <tr className="subheader-row">
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
        </tr>
      </thead>
      {/* <tbody>
        <tr data-id="139302831" className="show-statistics">
          <td>
            <label className="fake-check-black">
              <input
                type="checkbox"
                className="js-cbx-gig-row"
                value="139302831"
                data-filter="draft"
              />
              <span className="chk-img"></span>
            </label>
          </td>
          <td className="gig-image-small js-toggle-gig-stats">
            <span className="gig-pict-45">
              <a href="/users/eliyahushvartov/manage_gigs/video-reviews-for-your-products-or-services/edit">
                <img
                  src="//assetsv2.fiverrcdn.com/assets/v2_globals/missing-image-45x32-61c969f7076d4fb26a693665bd095c1f.png"
                  alt="video reviews for your products or services"
                  data-reload="broken"
                />
              </a>
            </span>
          </td>
          <td className="title js-toggle-gig-stats ">
            <div className="ellipsis">
              <a href="/users/eliyahushvartov/manage_gigs/video-reviews-for-your-products-or-services/edit">
                video reviews for your products or services
              </a>
            </div>
          </td>
          <td></td>
          <td>
            0<i className="fa "></i>
          </td>
          <td>
            0<i className="fa "></i>
          </td>
          <td>
            <span
              className="hint--top js-revenues-tt"
              data-gig="139302831"
              data-hint="Calculating Revenues..."
            >
              0
            </span>
            <i className="fa "></i>
          </td>
          <td>0%</td>
          <td className="js-plan-click"></td>
          <td className="t-a-right"></td>
          <td className="t-a-right">
            <div className="filter-select cf " style={{ marginTop: "5px" }}>
              <div className="fake-dropdown" style={{ visibility: "visible" }}>
                <ul
                  className="dropdown-menu pull-right "
                  role="menu"
                  style={{ top: " -2px" }}
                >
                  <li>
                    <a
                      target="_blank"
                      href="/users/eliyahushvartov/manage_gigs/video-reviews-for-your-products-or-services/edit"
                      className="js-gtm-event-auto"
                      data-gtm-category="My Gigs"
                      data-gtm-action="Gig Action"
                      data-gtm-label="Edit"
                    >
                      <span className="text-inner">Edit</span>
                    </a>
                  </li>
                  <li>
                    <form
                      method="post"
                      acceptCharset="UTF-8"
                      action="/users/eliyahushvartov/manage_gigs/video-reviews-for-your-products-or-services/delete"
                      className="delete-gig-form js-delete-gig-form js-gtm-event-auto"
                      data-gtm-category="My Gigs"
                      data-gtm-action="Gig Action"
                      data-gtm-label="Delete"
                    >
                      <input
                        type="hidden"
                        name="authenticity_token"
                        value="1664798449.SLdLqW7sSk76QfoUMa7i7Pl6r5TuHUPww/oG6OxFXHo="
                      />
                      <input type="submit" value="Delete" />
                    </form>
                  </li>
                </ul>
              </div>
            </div>{" "}
          </td>
        </tr>
      </tbody> */}
    </table>
  )
}
