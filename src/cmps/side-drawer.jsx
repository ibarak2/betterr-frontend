import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import { useState, Fragment } from "react"
import { NavLink, useSearchParams } from "react-router-dom"
import { UserAvatar } from "./user-avatar"
import { HamburgerIcon } from "../svg-icons"
import { useEffect } from "react"

export function SideDrawer({ loggedinUser }) {
  let anchor = "left"
  const [searchParams] = useSearchParams()
  const [offset, setOffset] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState({
    left: false,
  })

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    //-- clean up code
    window.removeEventListener("scroll", onScroll)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setDrawerOpen({ ...drawerOpen, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 272 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="side-nav"
    >
      <List>
        {loggedinUser ? (
          <UserAvatar
            height={36}
            imgUrl={loggedinUser.imgUrl}
            fullname={loggedinUser.fullname}
          />
        ) : (
          <button className="btn side-nav-btn">Join Fiverr</button>
        )}
        <div className="flex column side-nav-links">
          {loggedinUser ? (
            <NavLink to="/manage-orders/active-orders">Orders</NavLink>
          ) : (
            <NavLink to="/?nav=home">Sign in</NavLink>
          )}
          <NavLink to="/explore">Explore</NavLink>
        </div>
      </List>
      <Divider className="side-nav-divider" />
      <List>
        <div className="flex column side-nav-links">
          <NavLink to="/?nav=home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </List>
    </Box>
  )

  return (
    <Fragment>
      <div
        className={
          searchParams.get("nav") !== "home"
            ? "side-nav-burger"
            : offset > 0
            ? "side-nav-burger"
            : "side-nav-burger-top-homepage"
        }
        onClick={toggleDrawer(anchor, true)}
      >
        <HamburgerIcon />
      </div>
      <Drawer
        anchor={anchor}
        open={drawerOpen[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </Fragment>
  )
}
