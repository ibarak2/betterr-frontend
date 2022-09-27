import ReactStars from 'react-stars'
import { utilService } from '../services/util.service'



export const SellerOverview = ({ seller, reviews }) => {

    const averageRate = utilService.averageRating(reviews)

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
                value={averageRate}
                count={5}
                size={22}
                color2={'#FFB33E'}
                edit={false}
            /></div>
            <div style={{ color: '#FFB33E' }}>{averageRate}</div>
            <div>{`(${reviews.length})`}</div>



        </div>
    )
}