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

export function AppHeader() {

  //---- States ----//
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [logSign, setLogSign] = useState()
  const [modalOpen, setModalOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState({
    left: false,
  })
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
    //-- clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
    console.log(ev)
  }

  return (
    <header className="full app-header">
      <LoginSignup
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        logSign={logSign}
      />
      <div
        className={
          searchParams.get('nav') !== 'home'
            ? 'main-container main-header header-white'
            : offset > 0
              ? 'main-container main-header header-white'
              : 'main-container main-header'
        }
      >
        <div className="flex max-width-container main-header-wrapper">
          <div className="flex main-header-left">
            <SideDrawer
              setDrawerOpen={setDrawerOpen}
              toggleDrawer={toggleDrawer}
            />
            <a href="/?nav=home" className="site-logo">
              <img
                className="logo"
                src={
                  searchParams.get('nav') !== 'home'
                    ? 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663246874/Fiverr-Sprint-4/imgs/beterr./logo_fw45hc.png'
                    : offset > 0
                      ? 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663246874/Fiverr-Sprint-4/imgs/beterr./logo_fw45hc.png'
                      : 'https://res.cloudinary.com/dalkffrhf/image/upload/v1663666624/Fiverr-Sprint-4/imgs/beterr./logo-white_fnqy6y.png'
                }
                alt="betterr."
              />
            </a>
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
                type="search"
                className="header-search-input"
                autoComplete="off"
                placeholder="What service are you looking for today?"
              />
              <button className="btn btn-header-search">
                <span>
                  <svg
                    className="search-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
                  </svg>
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
                    <NavLink to="/chat">
                      <MailOutlineIcon />
                    </NavLink>
                    <NavLink to="/backoffice">Orders</NavLink>
                    <NavLink to={`/profile/${loggedinUser._id}`}>Profile</NavLink>
                    <a onClick={() => dispatch(onLogout())}>Logout</a>
                    {loggedinUser.isAdmin && (
                      <NavLink to="/admin">Admin</NavLink>
                    )}
                  </div>
                </li>
              ) : (
                <div className="flex signin-signup">
                  <li>
                    <a
                      onClick={() => {
                        handleOpenModal('sign')
                      }}
                    >
                      Become a seller
                    </a>
                    <a
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
