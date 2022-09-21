
export const SellerGigs = ({ title, imgUrls, plans }) => {

  return (
    <div class="gig-card-base seller-gig-card">
      <span>
        <ul class="clean-list gig-settings">
          <li>
            <a href="edit/:id" class="preview" target="_blank">
              Preview
            </a>
          </li>
          <li>
            <a href="edit/:id" class="edit" target="_blank">
              Edit
            </a>
          </li>
          <li>
            <a href="edit/:id" class="remove" target="_blank">
              Remove Gig
            </a>
          </li>
          <li>
            <a href="#" class="settings">
              Settings
            </a>
          </li>
        </ul>
        <div class="header-gig-card">
          <a href="/user/gig-title">
            <div>
              <figure class="no-image">
                <img
                  src={imgUrls[0]}
                  alt=""
                />
              </figure>
            </div>
            <h3>{title}</h3>
          </a>
        </div>
        <a href="#!" class="btn-gig-menu">
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
        </a>
        <a href="edit/:id" class="gig-min-price">
          <small>Starting at</small>${plans.basicPrice}
        </a>
      </span>
    </div>
  )
}
