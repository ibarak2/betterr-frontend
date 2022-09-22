import { EditProfile } from '../cmps/edit-profile'
import { SellerGigsList } from '../cmps/seller-gigs-list'
import { userService } from '../services/user.service'
import { gigService } from '../services/gig.service'
import { useParams } from 'react-router-dom'

export const UserProfile = () => {

  const user = userService.getLoggedinUser()

  return (
    <div className="user-profile-wrapper">
      <div className="flex user-profile">
        <EditProfile user={user} />
        <SellerGigsList />
      </div>
    </div>
  )
}
