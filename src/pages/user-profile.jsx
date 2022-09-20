import { EditProfile } from '../cmps/edit-profile'
import { SellerGigsList } from '../cmps/seller-gigs-list'

export const UserProfile = () => {
  return (
    <div className="user-profile-wrapper">
      <div className="flex user-profile">
        <EditProfile />
        <SellerGigsList />
      </div>
    </div>
  )
}
