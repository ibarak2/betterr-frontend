import { HomePage } from "./pages/home-page.jsx"
import { AboutUs } from "./pages/about-us.jsx"
import { ReviewApp } from "./pages/review-app.jsx"
import { ChatApp } from "./pages/chat-app.jsx"
import { AdminApp } from "./pages/admin-app.jsx"
import { GigDetails } from "./pages/gig-details.jsx"
import { Explore } from "./pages/explore.jsx"
import { Edit } from "./pages/edit.jsx"
import { BackOfficeApp } from "./pages/back-office-app.jsx"
import { UserProfile } from "./pages/user-profile.jsx"
// Routes accesible from the main navigation (in AppHeader)
const routes = [
  {
    path: "/",
    component: <HomePage />,
    label: "Home",
  },
  {
    path: "explore",
    component: <Explore />,
    label: "Explore",
  },
  {
    path: "gig/:id",
    component: <GigDetails />,
    label: "Gig details",
  },
  {
    path: "edit/:id",
    component: <Edit />,
    label: "Edit/Add",
  },
  {
    path: "edit",
    component: <Edit />,
    label: "Edit/Add",
  },
  {
    path: "review",
    component: <ReviewApp />,
    label: "Reviews",
  },
  {
    path: "chat",
    component: <ChatApp />,
    label: "Chat",
  },
  {
    path: "about",
    component: <AboutUs />,
    label: "About us",
  },
  {
    path: "admin",
    component: <AdminApp />,
    label: "Admin Only",
  },
  {
    path: "backoffice/*",
    component: <BackOfficeApp header={"Gigs"} />,
    label: "Back Office",
  },
  {
    path: "manage-orders/*",
    component: <BackOfficeApp header={"Manage Orders"} />,
    label: "Manage Orders",
  },
  {
    path: "profile/:id",
    component: <UserProfile />,
    label: "User Profile",
  },
]

export default routes
