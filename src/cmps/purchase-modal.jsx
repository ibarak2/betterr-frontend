import { NavLink } from "react-router-dom"

export const PurchaseModal = ({ onPurchase, onCancel, isSelected, gigImg }) => {
  const { plan, price, daysToMake, planTitle } = isSelected
  console.log(isSelected)
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    fill="none"
                    strokeMiterlimit="10"
                  ></circle>
                  <path fill="none" strokeMiterlimit="10" d="M12 11v6"></path>
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
        <div className="flex space-between order-details-top">
            <div className="left">
                YOU ARE BUYING FROM <small>BarakKaldess</small>
            </div>
            <div className="right">
                By buying from this seller you accept their &#160;
                <NavLink to={"/about"}>Terms & conditions</NavLink>
            </div>
        </div>
        <div className="flex order-details-main">
            <div className="flex left">
                <div className="img-wrapper">
                    <NavLink to={`/explore`} className="flex">
                    <img src={gigImg} alt="" />
                    </NavLink>
                </div>
                <div className="flex gig-title-wrapper">
                    <div className="gig-title">
                        <NavLink to={`/explore`}>
                           <h3>{planTitle}</h3>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="flex right">
                <div className="flex price-wrapper">
                    <div className="flex price-details">
                        <span className="plan-price"><span>$ </span>{price ? price.toFixed(2) : price}</span>
                        <span className="plan-fee">VAT inc. if applicable</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex order-details-bottom">
            <p>
            Betterr staff and verified users will NEVER ask for private information
            </p>
        </div>
      </div>

      <div className="order-modal-pricing">
        <div className="email-wrapper">
            <input type="email" placeholder="Enter email"/>
        </div>

        <div className="flex delivery-time-wrapper">
            Delivery time:<span> &#160;{`${daysToMake} `}{(daysToMake > 1) ? 'days' : 'day'}</span>
        </div>

        <div className="flex space-between total-price-wrapper">
            <span className="price-title">Total price</span>
            <span className="total-price"><span className="dollar">$</span> {price ? price.toFixed(2) : price}</span>
        </div>

        <div className="flex column btns-wrapper">
            <button className="btn-checkout" onClick={onPurchase}>Order now</button>
            <button className="btn-cancel" onClick={onCancel}>cancel</button>
        </div>

        <div className="read-and-accept-wrapper">
            <span className="read-and-accept">
            By clicking “Continue to payment” I acknowledge I have read and agreed to 
            <NavLink to={"/about"}> BETTER. Terms & Conditions </NavLink>
            and
            <NavLink to={"/about"}> BETTER. Privacy Policy </NavLink>
            </span>
        </div>
      </div>
    </div>
  )
}
