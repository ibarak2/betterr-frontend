



export const SellerOverview = ({ seller }) => {



    return (
        <div className="seller-overview">
            <img src={seller.imgUrl}></img>
            <div><strong>{seller.fullname}</strong></div>
            <div>{seller.level}</div> |
            <div>{" * ".repeat(seller.rate)}</div>

        </div>
    )
}