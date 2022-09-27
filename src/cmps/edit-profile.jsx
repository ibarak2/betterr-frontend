import { useEffect, useState } from "react"
import { userService } from "../services/user.service"


export function EditProfile({ user }) {

  const [username, setUsername] = useState('')

  const onOpenModal = () => {
    console.log('open');
  }

  const onChangeName = async (ev) => {
    ev.preventDefault()
    console.log('username', username)

    const newName = await userService.update({
      username,
      userId: user._id
    })

    console.log('newName', newName)

    setUsername(newName)
    // return newName
  }

  const handleFormChange = (ev) => {
    const { name, value } = ev.target
    setUsername((prevUsername) => ({ ...prevUsername, [name]: value }))
  }

  return (
    <section className="user-info-wrapper">
      <div className="user-info">
        <div className="seller-card seller_card-package" data-reactroot="">
          <div className="user-online">
            <div className="user-online-indicator is-online ">
              <i className="dot">·</i>
              Online
            </div>
          </div>
          <div className="user-profile-info">
            <div>
              <div className="user-profile-image">
                <label className="profile-pic-edit">
                  <div className="camera-icon-wrapper">
                    <span className="camera-icon" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5.8182C6.29294 5.8182 4.90909 7.20205 4.90909 8.90911C4.90909 10.6162 6.29294 12 8 12C9.70706 12 11.0909 10.6162 11.0909 8.90911C11.0909 7.20205 9.70706 5.8182 8 5.8182Z"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.45455 15.2727C1.06878 15.2727 0.698807 15.1195 0.426027 14.8467C0.153246 14.5739 0 14.204 0 13.8182V4.36366C0 3.97789 0.153246 3.60792 0.426027 3.33514C0.698807 3.06236 1.06878 2.90911 1.45455 2.90911H4.36364L5.81818 0.727295H10.1818L11.6364 2.90911H14.5455C14.9312 2.90911 15.3012 3.06236 15.574 3.33514C15.8468 3.60792 16 3.97789 16 4.36366V13.8182C16 14.204 15.8468 14.5739 15.574 14.8467C15.3012 15.1195 14.9312 15.2727 14.5455 15.2727H1.45455ZM3.81818 8.90911C3.81818 6.59956 5.69045 4.72729 8 4.72729C10.3096 4.72729 12.1818 6.59956 12.1818 8.90911C12.1818 11.2187 10.3096 13.0909 8 13.0909C5.69045 13.0909 3.81818 11.2187 3.81818 8.90911ZM2.90909 5.09093C2.90909 5.49259 2.58348 5.8182 2.18182 5.8182C1.78016 5.8182 1.45455 5.49259 1.45455 5.09093C1.45455 4.68927 1.78016 4.36366 2.18182 4.36366C2.58348 4.36366 2.90909 4.68927 2.90909 5.09093Z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <input
                    type="file"
                    accept="image/png,image/jpeg"
                    id="profile_image"
                    className="hidden"
                    name="profile[image]"
                  />
                  <img
                    src={user.imgUrl}
                    className="profile-pict-img"
                    alt={user.username}
                  />
                </label>
              </div>
            </div>
            <div className="profile-username">
              <div className="username-container">
                <b className="seller-link">{user.username}</b>
              </div>
              <div className="change-name-wrapper">
                <div className="pen-wrapper">
                  <button className="change-username-btn" onClick={onOpenModal}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.3628 2.30102L13.6796 0.618553C12.8553 -0.205791 11.521 -0.205916 10.6965 0.618522L0.778434 10.4718L0.0102775 15.1279C-0.0733163 15.6346 0.365528 16.0736 0.872371 15.99L5.52846 15.2218L15.3824 5.30374C16.2052 4.4809 16.2131 3.15127 15.3628 2.30102ZM6.26384 9.7364C6.39809 9.87065 6.57406 9.93774 6.75 9.93774C6.92593 9.93774 7.1019 9.87065 7.23615 9.7364L10.9558 6.01671L11.8486 6.90949L6.5625 12.2301V10.9377H5.0625V9.43774H3.77012L9.09072 4.15165L9.9835 5.04443L6.26381 8.76408C5.9954 9.03258 5.9954 9.4679 6.26384 9.7364ZM2.56662 14.3169L1.6834 13.4336L2.06278 11.1341L2.63778 10.5627H3.9375V12.0627H5.4375V13.3624L4.86618 13.9375L2.56662 14.3169ZM14.4099 4.33146L14.4083 4.33305L14.4067 4.33465L12.9058 5.8454L10.1548 3.09446L11.6656 1.59352L11.6672 1.59196L11.6687 1.5904C11.9546 1.30458 12.418 1.30105 12.7073 1.59037L14.3903 3.2733C14.699 3.58196 14.7009 4.04046 14.4099 4.33146Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="user-stats-wrapper">
            <ul className="clean-list user-stats">
              <li className="flex user-location">
                <span>
                  <span className="user-stats-icon" aria-hidden="true">
                    <svg
                      width="12"
                      height="16"
                      viewBox="0 0 12 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path d="M5.38338 15.6772C0.842813 9.09472 0 8.41916 0 6C0 2.68628 2.68628 0 6 0C9.31372 0 12 2.68628 12 6C12 8.41916 11.1572 9.09472 6.61662 15.6772C6.31866 16.1076 5.68131 16.1076 5.38338 15.6772ZM6 8.5C7.38072 8.5 8.5 7.38072 8.5 6C8.5 4.61928 7.38072 3.5 6 3.5C4.61928 3.5 3.5 4.61928 3.5 6C3.5 7.38072 4.61928 8.5 6 8.5Z"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="12" height="16"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  From
                </span>
                <b>Israel</b>
              </li>
              <li className="flex member-since">
                <span>
                  <span className="lFICM06 user-stats-icon" aria-hidden="true">
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.8 9H9.27812C8.58437 9.31875 7.8125 9.5 7 9.5C6.1875 9.5 5.41875 9.31875 4.72188 9H4.2C1.88125 9 0 10.8813 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.8813 12.1187 9 9.8 9Z"></path>
                    </svg>
                  </span>
                  Member since
                </span>
                <b>Sept 2022</b>
              </li>
              <li className="flex monthley-revenue">
                <span className="revenue-status">
                  <img
                    className="dollar-sign"
                    src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663623917/Fiverr-Sprint-4/imgs/icons/icons8-money-13_il7ket.png"
                    alt=""
                  />
                  Earned this month
                </span>
                <span className="current-revenue">
                  <b>$420</b>
                </span>
              </li>
            </ul>
          </div>
        </div>
      <div className="username-modal">
        <form onSubmit={onChangeName}>
        <input
        type="text"
        value={username.newName}
        onChange={handleFormChange}
        name="fullname"
        autoComplete="off"
        placeholder="enter new username"
        />
        </form>
      </div>
      </div>

    </section>
  )
}
