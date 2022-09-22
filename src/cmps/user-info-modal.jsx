import { useState } from "react"

export function UserInfoModal({ onChangeUserName, modalOpen, handleCloseModal }) {
  const [userName, setUserName] = useState('')

  const handleChange = (ev) => {
    const value = ev.target.value

    setUserName(value)
  }

  const onSubmitUserName = (ev) => {
    ev.preventDefault()
    onChangeUserName(userName)
  }

  if (!modalOpen) return <span></span>
  return (
    <div className="login-signup">
      <form className="change-username-form" onSubmit={onSubmitUserName} handleChange={handleCloseModal}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={userName}
          placeholder="insert new username"
        />
        <button className="btn btn-close-modal" >ok</button>
      </form>
    </div>
  )
}
