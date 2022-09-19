import ReactStars from 'react-stars'




export const SellerOverview = ({ seller, reviewsAmount }) => {



    return (
        <div className="seller-overview">
            <img src={seller.imgUrl}></img>
            <div>
                <a href={`/profile/${seller._id}`}>
                    <strong>{seller.fullname}</strong>
                </a>
            </div>
            <div>{seller.level}</div> |
            <div><ReactStars
                value={seller.rate}
                count={5}
                size={22}
                color2={'#FFB33E'}
                edit={false}
            /></div>
            <div style={{ color: '#FFB33E' }}>{seller.rate}</div>
            <div>{`(${reviewsAmount})`}</div>



        </div>
    )
}