



export const PurchaseModal = ({ onPurchase, onCancel, isSelected, gigImg }) => {

    console.log(gigImg)
    const { plan, price, daysToMake, planTitle } = isSelected
    return (
        <div className="purchase-modal-wrapper">
            <div className="main-container purchase-modal">
                <h3 className="price-summary">Order Gig Summary</h3>

                <div className="gig-plan-img">
                    <img src={gigImg} alt="" />
                </div>
                <p className="plan-title">{planTitle}</p>
                <div className="order-seperator"></div>
                <div className="flex space-between order-price">
                    <p className="price-title">Total</p>
                    <span className="price">USD${price}</span>
                </div>

                <div className="flex space-between order-due-on">
                    <p className="delivery-title">Delivery Time</p>
                    <span className="delivery-time">{daysToMake} {daysToMake > 1 ? 'days' : 'day'}</span>
                </div>
                
                <div className="flex order-btns">
                    <button className="purchase-btn" onClick={() => onPurchase(plan, daysToMake, price)}>Checkout</button>
                    <button className="cancel-btn" onClick={() => onCancel()}>Cancel</button>
                </div>
                <div className="the-small-words">
                    <p>
                        Verified users will NEVER ask for private information.
                    </p>
                </div>
            </div>
        </div>
    )
}