import { EditProfile } from '../cmps/edit-profile'
import { SellerGigsList } from '../cmps/seller-gigs-list'
import { userService } from '../services/user.service'
import { gigService } from '../services/gig.service'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadGigsByOwner, onRemoveGigOptimistic } from '../store/gig.actions'

export const UserProfile = () => {

  const gigsByOwner = useSelector((state) => state.gigModule.gigsByOwner)
  const loggedinUser = useSelector((state) => state.userModule.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGigsByOwner(loggedinUser._id))
  }, [])

  const onDeleteGig = (gigId) => {
    console.log(gigId);
    dispatch(onRemoveGigOptimistic(gigId))
  }



  return (
    <div className="user-profile-wrapper">
      <div className="flex user-profile">
        <EditProfile user={loggedinUser} />
        <SellerGigsList gigsByOwner={gigsByOwner} onDeleteGig={onDeleteGig} />
      </div>
    </div>
  )
}
