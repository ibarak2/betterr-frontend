import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { EditBox } from '../cmps/edit-box'
import { useForm } from '../hooks/useForm'
import { gigService } from '../services/gig.service'
import { uploadService } from '../services/upload.service'
import { addGig } from '../store/gig.actions'
import { showSuccessMsg } from '../services/event-bus.service'
import { UserMsg } from '../cmps/user-msg'

export const Edit = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loggedinUser = useSelector((state) => state.userModule.user)
  const [gig, handleChange, setGig] = useForm({
    title: '',
    category: '',
    basicPrice: '',
    basicTitle: '',
    basicDescription: '',
    basicDaysToMake: '',
    standardPrice: '',
    standardTitle: '',
    standardDescription: '',
    standardDaysToMake: '',
    premiumPrice: '',
    premiumTitle: '',
    premiumDescription: '',
    premiumDaysToMake: '',
    description: '',
    img1: '',
    img2: '',
    img3: '',
  })

  useEffect(async () => {
    if (!loggedinUser) {
      navigate('/')
    }

    const gigId = params.id
    if (!gigId) return
    try {
      const gig = await gigService.getById(gigId)
      onSetGig(gig)
    } catch (err) {
    }
  }, [])

  const onSetGig = (gig) => {
    const currentGig = {
      _id: gig._id,
      title: gig.title,
      category: gig.category,
      basicPrice: gig.plans.basicPrice,
      basicTitle: gig.plans.basicTitle,
      basicDescription: gig.plans.basicDescription,
      basicDaysToMake: gig.plans.basicDaysToMake,
      standardPrice: gig.plans.standardPrice,
      standardTitle: gig.plans.standardTitle,
      standardDescription: gig.plans.standardDescription,
      standardDaysToMake: gig.plans.standardDaysToMake,
      premiumPrice: gig.plans.premiumPrice,
      premiumTitle: gig.plans.premiumTitle,
      premiumDescription: gig.plans.premiumDescription,
      premiumDaysToMake: gig.plans.premiumDaysToMake,
      description: gig.description,
      img1: gig.imgUrls[0],
      img2: gig.imgUrls[1],
      img3: gig.imgUrls[2],
    }
    setGig(currentGig)
  }

  const onSubmitEdit = () => {
    const gigToAdd = {
      title: gig.title,
      description: gig.description,
      category: gig.category,
      plans: {
        basicPrice: gig.basicPrice,
        basicTitle: gig.basicTitle,
        basicDescription: gig.basicDescription,
        basicDaysToMake: gig.basicDaysToMake,
        standardPrice: gig.standardPrice,
        standardTitle: gig.standardTitle,
        standardDescription: gig.standardDescription,
        standardDaysToMake: gig.standardDaysToMake,
        premiumPrice: gig.premiumPrice,
        premiumTitle: gig.premiumTitle,
        premiumDescription: gig.premiumDescription,
        premiumDaysToMake: gig.premiumDaysToMake,
      },
      imgUrls: [gig.img1, gig.img2, gig.img3],
    }
    if (gig._id) {
      gigToAdd._id = gig._id
      showSuccessMsg('Your gig has been updated')
    }
    // console.log(gigToAdd)
    onAddGig(gigToAdd)
    showSuccessMsg('Your gig has been uploaded')
    
  }

  const onAddGig = async (gigToAdd) => {
    try {
      await gigService.save(gigToAdd)
    } catch (err) {
      // console.log(err)
    }
  }

  const onAddingImg = async (event) => {
    const field = event.target.name
    try {
      const imgUrl = await uploadService.uploadImg(event)
      setGig((prevFields) => ({ ...prevFields, [field]: imgUrl.url }))
    } catch (err) {
      // console.log(err)
    }
  }

  return (
    <div className="edit">

      <EditBox
        onSubmitEdit={onSubmitEdit}
        gig={gig}
        handleChange={handleChange}
        setGig={setGig}
        onAddingImg={onAddingImg}
      />
    </div>
  )
}
