import { EditProfile } from '../cmps/edit-profile'
import { SellerGigsList } from '../cmps/seller-gigs-list'
import { userService } from '../services/user.service'
import { gigService } from '../services/gig.service'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { loadGigsByOwner, onRemoveGigOptimistic } from '../store/gig.actions'
import { orderService } from '../services/order.service'

export const UserProfile = () => {

  const [analytics, setAnalytics] = useState()
  const [user, setUser] = useState()
  const gigsByOwner = useSelector((state) => state.gigModule.gigsByOwner)
  const loggedinUser = useSelector((state) => state.userModule.user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGigsByOwner(loggedinUser._id))
    loadAnalytics()
    loadUserInfo()
  }, [])

  const loadAnalytics = async () => {
    try {
      const analytics = await orderService.getAnalytics()
      setAnalytics(analytics)
    } catch (err) {
      console.log(err);
    }
  }

  const loadUserInfo = async () => {
    try {
      setUser(loggedinUser)
    } catch (err) {
      console.log(err)
    }
  }

  const onDeleteGig = (gigId) => {
    console.log(gigId);
    dispatch(onRemoveGigOptimistic(gigId))
  }

  return (
    <div className="user-profile-wrapper">
      <div className="flex user-profile">
        {analytics && <EditProfile user={user} analytics={analytics} />}
        <SellerGigsList gigsByOwner={gigsByOwner} onDeleteGig={onDeleteGig} />
      </div>
    </div>
  )
}
