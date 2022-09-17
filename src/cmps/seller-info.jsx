import ReactStars from 'react-stars'




export const SellerInfo = ({ seller }) => {




    return (
        <div className='seller-info'>
            <div className="seller-img">
                <img src={seller.imgUrl}></img>
            </div>
            <div className="seller-details">
                <a href={`/profile/${seller._id}`}>{seller.fullname}</a>
                <div className='flex align-center'>
                    <ReactStars
                        value={seller.rate}
                        count={5}
                        size={22}
                        color2={'#FFB33E'}
                        edit={false}
                        border
                    />
                    <span>{`(${seller.reviewsAmount})`}</span></div>
                <button>Contact Me</button>
            </div>
        </div>
    )
}