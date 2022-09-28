import ReactStars from 'react-stars'
import { utilService } from '../services/util.service'



export const SellerOverview = ({ seller, reviews }) => {

    const averageRate = utilService.averageRating(reviews)

    return (
        <div className="seller-overview">
            <img src={seller.imgUrl}></img>
            <div className='fullname'>
                <strong>{seller.fullname}</strong>
            </div>
            {(seller.level === 'Top rated Seller')}
            <div>Level {seller.level} Seller</div>
            <span className='sperator'>|</span>
            <div className='stars'><ReactStars
                value={averageRate}
                count={5}
                size={22}
                color2={'#FFB33E'}
                edit={false}
            /></div>
            <div style={{ color: '#FFB33E' }}>{reviews.length ? averageRate : 0}</div>
            <div className='reviews-count'>{`(${reviews.length})`}</div>



        </div>
    )
}