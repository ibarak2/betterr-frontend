import { useState } from "react"
import { Link } from "react-router-dom"

export const SellerGigs = ({ title, imgUrls, plans, _id }) => {


  const [gigSetting, setGigSettings] = useState('hidden')

  const onOpenModal = () => {
    setGigSettings('active')
    console.log('gigSetting', gigSetting);
  }

  const onCloseModal = () => {
    setGigSettings('hidden')
    console.log('gigSetting', gigSetting);
  }

  return (
    <div className="gig-card-base seller-gig-card">
      <span>
        <ul className={"clean-list gig-settings " + gigSetting}>
          <li>
            <Link to={`/gig/${_id}`} className="preview" onClick={onCloseModal}>
              Preview
            </Link>
          </li>
          <li>
            <Link to={`/edit/${_id}`} className="edit-gig">
              Edit
            </Link>
          </li>
          <li>
            <a href="edit/:id" className="remove" target="_blank">
              Remove Gig
            </a>
          </li>
          <li>
          <Link to={`/edit/${_id}`} className="settings">
              Setting
            </Link>
          </li>
        </ul>
        <div className="header-gig-card">
          <a href="/user/gig-title">
            <div>
              <figure className="no-image">
                <img
                  src={imgUrls[0]}
                  alt=""
                />
              </figure>
            </div>
            <h3>{title}</h3>
          </a>
        </div>
        <button onClick={onOpenModal} className="btn-gig-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="10"
            viewBox="0 0 42 10"
          >
            <path
              fill="#C6C6C6"
              d="M5 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm16 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm16 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z"
            ></path>
          </svg>
        </button>
        <a href="edit/:id" className="gig-min-price">
          <small>Starting at</small>${plans.basicPrice}
        </a>
      </span>
    </div>
  )
}
