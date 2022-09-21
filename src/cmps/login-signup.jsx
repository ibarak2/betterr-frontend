import { useState, useEffect } from "react"
import { userService } from "../services/user.service"
import { ImgUploader } from "../cmps/img-uploader"
import CloseIcon from "@mui/icons-material/Close"
import { useDispatch } from "react-redux"
import { onLogin, onSignup } from "../store/user.actions"

export function LoginSignup({ modalOpen, handleCloseModal, logSign }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    fullname: "",
  })
  const [isSignup, setIsSignup] = useState()
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    if (logSign === 'log') setIsSignup(false)
    if (logSign === 'sign') setIsSignup(true)
  }, [logSign])

  // useEffect(async () => {
  //   const users = await userService.getUsers()
  //   setUsers(users)
  // }, [])

  const clearState = () => {
    setCredentials({
      username: "",
      password: "",
      // fullname: "",
      // imgUrl: "",
    })
    setIsSignup(false)
  }

  const handleChange = (ev) => {
    const field = ev.target.name
    const value = ev.target.value
    setCredentials({ ...credentials, [field]: value })
  }

  const handleLogin = (ev = null) => {
    if (ev) ev.preventDefault()
    if (!credentials.username) return
    dispatch(onLogin(credentials))
    clearState()
    handleCloseModal("close-btn")
  }

  const handleSubmit = (ev = null) => {
    if (ev) ev.preventDefault()
    if (!credentials.username || !credentials.password || !credentials.fullname)
      return
    dispatch(onSignup(credentials))
    clearState()
    handleCloseModal("close-btn")
  }

  const toggleSignup = () => {
    setIsSignup(!isSignup)
  }
  const onUploaded = (imgUrl) => {
    setCredentials({ ...credentials, imgUrl })
  }

  if (!modalOpen) return <span></span>
  return (
    <div className="login-signup">
      <div
        className="login-signup-close-modal-div"
        onClick={(ev) => handleCloseModal(ev)}
      ></div>
      <div className="login-signup-container">
        <CloseIcon
          className='close-btn'
          onClick={() => handleCloseModal("close-btn")}
        />
        <h4 className="login-signup-title">
          {isSignup ? "Join Betterr" : "Sign In to Betterr"}
        </h4>
        <form
          className="login-signup-form"
          onSubmit={isSignup ? handleSubmit : handleLogin}
        >
          <div>
            <label htmlFor="username"></label>
            <input
              name="username"
              type="text"
              required
              placeholder="Email / Username"
              onChange={handleChange}
            />
          </div>
          {isSignup && (
            <div>
              <label htmlFor="fullname"></label>
              <input
                name="fullname"
                type="text"
                required
                placeholder="Full Name"
                onChange={handleChange}
              />
            </div>
          )}
          <div>
            <label htmlFor="password"></label>
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              onChange={handleChange}
            />
          </div>


          <div>
            <button>Continue</button>
          </div>
        </form>
        <div className="login-signup-footer">
          <p>
            {isSignup ? "Already a member?" : "Not a member yet?"}{" "}
            <a onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? "Sign In" : "Join Now"}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

{
  /* <p>
<button className="btn-link" onClick={toggleSignup}>
  {!isSignup ? "Signup" : "Login"}
</button>
</p>
{!isSignup && (
<form className="login-form" onSubmit={handleLogin}>
  <select
    name="username"
    value={credentials.username}
    onChange={handleChange}
  >
    <option value="">Select User</option>
    {users.map((user) => (
      <option key={user._id} value={user.username}>
        {user.fullname}
      </option>
    ))}
  </select>
  {/* <input
                type="text"
                name="username"
                value={username}
                placeholder="Username"
                onChange={this.handleChange}
                required
                autoFocus
            />
            <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
                required
            /> */
}
//   <button>Login!</button>
// </form>
// )}
// <div className="signup-section">
// {isSignup && (
//   <form className="signup-form" onSubmit={handleSubmit}>
//     <input
//       type="text"
//       name="fullname"
//       value={credentials.fullname}
//       placeholder="Fullname"
//       onChange={handleChange}
//       required
//     />
//     <input
//       type="text"
//       name="username"
//       value={credentials.username}
//       placeholder="Username"
//       onChange={handleChange}
//       required
//     />
//     <input
//       type="password"
//       name="password"
//       value={credentials.password}
//       placeholder="Password"
//       onChange={handleChange}
//       required
//     />
//     <ImgUploader onUploaded={onUploaded} />
//     <button>Signup!</button>
//   </form>
// )}
// </div> */}
