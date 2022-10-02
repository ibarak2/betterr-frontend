import { useEffect, useState } from 'react'
import { Link, NavLink, useParams, useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onLogin, onLogout, onSignup } from '../store/user.actions.js'
import { LoginSignup } from './login-signup.jsx'
import { SecondaryNavbar } from './secondary-navbar'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { SideDrawer } from './side-drawer'
import { userService } from '../services/user.service.js'
import { socketService } from '../services/socket.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { SearchIcon } from '../svg-icons.js'
import { setOrderStatusLocal } from '../store/order.actions.js'

export function AppHeader() {
  //---- States ----//
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logSign, setLogSign] = useState()
  const [modalOpen, setModalOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState({ left: false })
  const [offset, setOffset] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams()
  const loggedinUser = useSelector((state) => state.userModule.user)

  //---- functions ----//
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    )
      return

    setDrawerOpen({ ...drawerOpen, ['left']: open })
  }

  useEffect(() => {

    const onScroll = () => setOffset(window.pageYOffset)
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })

    socketService.on('new-order-recieved', (data) => {
      showSuccessMsg(data)
    })

    socketService.on("on-order-changed-status", (data) => {
      console.log("data", data);
      (data.status === 'cancelled') ? showErrorMsg(data.txt) : showSuccessMsg(data.txt)

      dispatch(setOrderStatusLocal({ orderId: data.orderId, status: data.status }))
    })

    return () => {
      socketService.off('new-order-recieved')
      socketService.off('on-order-changed-status')
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleCloseModal = (ev) => {
    if (
      ev === 'close-btn' ||
      ev.target.className.includes('login-signup-close-modal-div')
    ) {
      setModalOpen(false)
      setLogSign('')
    }
  }

  const handleOpenModal = (logSign) => {
    setLogSign(logSign)
    setModalOpen(true)
  }

  const onSearch = (ev) => {
    ev.preventDefault()
    const value = ev.target[0].value
    navigate(`/explore?search=${value}`)
  }

  const logout = () => {
    dispatch(onLogout())
    navigate('/?nav=home')
  }

  const appbarStyle = () => {
    let mainHeaderClasses = 'main-container main-header'
    if (searchParams.get('nav') !== 'home' || offset > 0) {
      mainHeaderClasses += ' header-white'
    }
    return mainHeaderClasses
  }

  const appLogo = () => {
    let headerLogo = 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663666624/Fiverr-Sprint-4/imgs/beterr./logo-white_fnqy6y.png'
    if (searchParams.get('nav') !== 'home' || offset > 0) {
      headerLogo = 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663246874/Fiverr-Sprint-4/imgs/beterr./logo_fw45hc.png'
    }
    return headerLogo
  }
  return (
    <header className="full app-header">
      <LoginSignup
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        logSign={logSign}
      />
      <div className={appbarStyle()}>
        <div className="flex max-width-container main-header-wrapper">
          <div className="flex main-header-left">
            <SideDrawer
              loggedinUser={loggedinUser}
              setDrawerOpen={setDrawerOpen}
              toggleDrawer={toggleDrawer}
              onOpenLogSign={handleOpenModal}
            />
            <NavLink to="/?nav=home" className="site-logo">
              {/* <div > */}
              <img className="logo" src={appLogo()} alt="betterr." />
              {/* </div> */}
            </NavLink>
          </div>

          <div
            className={
              searchParams.get('nav') !== 'home'
                ? 'header-search header-search-shown'
                : offset >= 190
                  ? 'header-search header-search-shown'
                  : 'header-search'
            }
          >
            <form className="flex" onSubmit={(ev) => onSearch(ev)}>
              <input
                required
                type="search"
                className="header-search-input"
                autoComplete="off"
                placeholder="What service are you looking for today?"
              />
              <button className="btn btn-header-search">
                <span>
                  <SearchIcon />
                </span>
              </button>
            </form>
          </div>

          <nav className="flex nav">
            <ul className="flex clean-list nav-list">
              <li className="nav-routes">
                <div className="basic-nav-routes">
                  <NavLink to="/explore">Explore</NavLink>
                </div>
              </li>
              {loggedinUser ? (
                <li>
                  <div className="flex logged-in">
                    <NavLink
                      to="/manage-orders/active-orders"
                      className="nav-orders"
                    >
                      Orders
                    </NavLink>
                    <a onClick={logout}>Logout</a>
                    <NavLink
                      to={`/profile/${loggedinUser._id}`}
                      className="header-avatar-wrapper"
                    >
                      <img
                        className="header-avatar"
                        src={loggedinUser.imgUrl}
                        alt={loggedinUser.fullname}
                      />
                    </NavLink>
                  </div>
                </li>
              ) : (
                <div className="flex signin-signup">
                  <li>
                    <a className='header-become-a-seller'
                      onClick={() => {
                        handleOpenModal('sign')
                      }}
                    >
                      Become a seller
                    </a>
                    <a className='header-sign-in'
                      onClick={() => {
                        handleOpenModal('log')
                      }}
                    >
                      Sign In
                    </a>
                    <a
                      onClick={() => {
                        handleOpenModal('sign')
                      }}
                      className="nav-join"
                    >
                      Join
                    </a>
                  </li>
                </div>
              )}
            </ul>
          </nav>
        </div>
      </div>

      <section
        className={
          searchParams.get('nav') !== 'home'
            ? 'main-container flex second-nav-shown second-nav'
            : offset >= 150
              ? 'main-container flex second-nav-shown second-nav'
              : 'main-container flex max-width-container second-nav'
        }
      >
        <SecondaryNavbar />
      </section>
    </header>
  )
}
