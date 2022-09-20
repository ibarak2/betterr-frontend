import { EditProfile } from '../cmps/edit-profile'
import { SellerGigsList } from '../cmps/seller-gigs-list'
import { userService } from '../services/user.service'

export const UserProfile = () => {

  const user = userService.getLoggedinUser()
  console.log('user', user);

  return (
    <div className="user-profile-wrapper">
      <div className="flex user-profile">
        <EditProfile user={user} />
        <SellerGigsList user={user} />
      </div>
    </div>
  )
}
