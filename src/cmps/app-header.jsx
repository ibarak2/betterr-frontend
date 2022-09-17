import { Link, NavLink, useParams, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import routes from '../routes'
import { onLogin, onLogout, onSignup } from '../store/user.actions.js'
import { LoginSignup } from './login-signup.jsx'
import { useEffect, useState } from 'react'
import { SecondaryNavbar } from './secondary-navbar'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export function AppHeader() {
  const [offset, setOffset] = useState(0)

  const [searchParams, setSearchParams] = useSearchParams()

  console.log('searchParams', searchParams)

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    //-- clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  console.log(offset)


  return (
    <header className="app-header">
      <div
        className={(searchParams.get('nav') !== "home") ? "app-header header-white" : (offset > 0) ? "app-header header-white" : "app-header"}
      >
        <div className="flex max-width-container main-header-wrapper">
          <a href="/" className="site-logo">
            <img
              className="logo"
              src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663246874/Fiverr-Sprint-4/imgs/beterr./logo_fw45hc.png"
              alt="betterr."
            />
          </a>

          <div
            className={
              offset >= 200
                ? 'header-search header-search-shown'
                : 'header-search'
            }
          >
            <form className="flex">
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

          <nav className='flex nav'>
            <ul className='flex clean-list nav-list'>
              <li className='nav-routes'>
                <div className='basic-nav-routes'>
                  <NavLink to='/?nav=home'>Home</NavLink>
                  <NavLink to='/explore'>Explore</NavLink>
                  <NavLink to='/about'>About Us</NavLink>
                </div>
              </li>
              {/* {user ?  */}
              <li>

                <div className='flex logged-in'>
                  <NavLink to='/chat'><MailOutlineIcon /></NavLink>
                  <NavLink to='/back-office'>Orders</NavLink>
                  <NavLink to={`/profile/u101`}>Profile</NavLink>
                  {/* {user.isAdmin ? */}
                  <NavLink to='/admin'>Admin</NavLink>
                  {/* : */}
                  {''}
                  {/* } */}
                </div>
              </li>
              {/* : */}
              <div className='flex signin-signup'>
                <li><a href="/">Sign In</a></li>
                <li><a href="/" className="nav-join">Join</a></li>
              </div>
              {/* } */}
            </ul>
          </nav>
        </div>


        <section className={offset > 100 ? "second-nav-shown second-nav" : "max-width-container second-nav"}>
          <SecondaryNavbar />
        </section>
      </div>
    </header>


// <nav>
//   {user && (
//     <span className="user-info">
//       <Link to={`user/${user._id}`}>
//         {user.imgUrl && <img src={user.imgUrl} />}
//         {user.fullname}
//       </Link>
//       <span className="score">{user.score?.toLocaleString()}</span>
//       <button onClick={onLogout}>Logout</button>
//     </span>
//   )}

<<<<<<< HEAD
      //   {!user && (
      //     <section className="user-info">
      //       <LoginSignup onLogin={onLogin} onSignup={onSignup} />
      //     </section>
      //   )}
      // </nav>



=======
//   {!user && (
//     <section className="user-info">
//       <LoginSignup onLogin={onLogin} onSignup={onSignup} />
//     </section>
//   )}
// </nav>
>>>>>>> c5e3cd335120982e63bdbac275c33370708b88b7
