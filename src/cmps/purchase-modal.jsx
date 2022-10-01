export const PurchaseModal = ({ onPurchase, onCancel, isSelected, gigImg }) => {
  console.log(gigImg)
  const { plan, price, daysToMake, planTitle } = isSelected
  return (
    // <div className="purchase-modal-wrapper">
    //     <div className="main-container purchase-modal">
    //         <h3 className="price-summary">Order Gig Summary</h3>

    //         <div className="gig-plan-img">
    //             <img src={gigImg} alt="" />
    //         </div>
    //         <p className="plan-title">{planTitle}</p>
    //         <div className="order-seperator"></div>
    //         <div className="flex space-between order-price">
    //             <p className="price-title">Total</p>
    //             <span className="price">USD${price}</span>
    //         </div>

    //         <div className="flex space-between order-due-on">
    //             <p className="delivery-title">Delivery Time</p>
    //             <span className="delivery-time">{daysToMake} {daysToMake > 1 ? 'days' : 'day'}</span>
    //         </div>

    //         <div className="flex order-btns">
    //             <button className="purchase-btn" onClick={() => onPurchase(plan, daysToMake, price)}>Checkout</button>
    //             <button className="cancel-btn" onClick={() => onCancel()}>Cancel</button>
    //         </div>
    //         <div className="the-small-words">
    //             <p>
    //                 Verified users will NEVER ask for private information.
    //             </p>
    //         </div>
    //     </div>
    // </div>

    <div className=" flex order-modal">
      <div className="order-modal-header-wrapper">
        <section className="flex order-modal-header">
          <header className="flex space-between order-header">
            <div className="flex left">
              <h1>Order summery</h1>
            </div>
            <div className="flex right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                color="#2F82FB"
              >
                <g
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    fill="none"
                    stroke-miterlimit="10"
                  ></circle>
                  <path fill="none" stroke-miterlimit="10" d="M12 11v6"></path>
                  <circle
                    data-stroke="none"
                    cx="12"
                    cy="7"
                    r="1"
                    stroke="none"
                  ></circle>
                </g>
              </svg>
              <p>
                Complete the order - adding products to the cart does not mean
                booking.
              </p>
            </div>
          </header>
        </section>
      </div>

      <div className="order-modal-details">
        <div className="order-details-top"></div>


      </div>
      <div className="order-modal-pricing"></div>
    </div>
  )
}
