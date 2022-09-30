import { useState } from "react"

export function UserInfoModal({ onChangeName, modalOpen, handleCloseModal }) {
  const [fullname, setFullname] = useState('')

  const handleChange = (ev) => {
    const value = ev.target.value
    setFullname(value)
  }

  const onSubmitUserName = (ev) => {
    ev.preventDefault()
    const field = ev.target[0].name
    onChangeName(field, fullname)
    setFullname('')
  }

  const onCloseModal = () => {
    setFullname('')
    handleCloseModal()
  }

  if (!modalOpen) return <span></span>
  return (
    <div className="login-signup">
      <form className="change-username-form" onSubmit={onSubmitUserName}>
        <input
          type="text"
          name="fullname"
          onChange={handleChange}
          value={fullname}
          placeholder="insert new username"
        />
        <button className="btn btn-close-modal">ok</button>
        <button onClick={onCloseModal}>X</button>
      </form>
    </div>
  )
}
