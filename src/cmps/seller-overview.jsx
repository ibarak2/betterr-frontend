import ReactStars from 'react-stars'




export const SellerOverview = ({ seller }) => {



    return (
        <div className="seller-overview">
            <img src={seller.imgUrl}></img>
            <div><strong>{seller.fullname}</strong></div>
            <div>{seller.level}</div> |
            <div><ReactStars
                value={seller.rate}
                count={5}
                size={24}
                color2={'#ffd700'}
                edit={false}
            /></div>

        </div>
    )
}