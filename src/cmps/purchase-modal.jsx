



export const PurchaseModal = ({ onPurchase, onCancel, isSelected }) => {


    const { plan, price, daysToMake, planTitle } = isSelected
    return (
        <div className="purchase-modal">
            <h3 className="price-summary">Order Gig Summary</h3>
            <p className="plan-title">{planTitle}</p>

            <p className="price-title">Total</p>
            <span className="price">{price}$</span>
            <p className="delivery-title">Delivery Time</p>
            <span className="delivery-time">{daysToMake} {daysToMake > 1 ? 'days' : 'day'}</span>
            <button className="purchase-btn" onClick={() => onPurchase(plan, daysToMake, price)}>Checkout</button>
            <button className="cancel-btn" onClick={() => onCancel()}>Cancel</button>
        </div>
    )
}