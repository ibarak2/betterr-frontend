



export const PurchaseModal = ({ onPurchase, onCancel, isSelected }) => {


    const { plan, price, daysToMake } = isSelected
    return (
        <div className="purchase-modal">
            <h3>Price Summery</h3>
            <div>
                <p>Plan</p>
                <span>{plan}</span>
            </div>
            <div>
                <p>Total</p>
                <span>{price}$</span>
            </div>
            <div>
                <p>Delivery Time</p>
                <span>{daysToMake} {daysToMake > 1 ? 'days' : 'day'}</span>
            </div>
            <button onClick={() => onPurchase(plan, daysToMake, price)}>Checkout</button>
            <button onClick={() => onCancel()}>Cancel</button>
        </div>
    )
}