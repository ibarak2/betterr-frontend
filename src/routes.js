import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { GigApp } from './pages/gig-app.jsx'
import { ReviewApp } from './pages/review-app.jsx'
import { ChatApp } from './pages/chat-app.jsx'
import { AdminApp } from './pages/admin-app.jsx'
import { GigDetails } from './pages/gig-details.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home',
    },
    {
        path: 'gig',
        component: <GigApp />,
        label: 'Gigs'
    },
    {
        path: 'gig/:id',
        component: <GigDetails />,
        label: 'Gig details'
    },
    {
        path: 'review',
        component: <ReviewApp />,
        label: 'Reviews'
    },
    {
        path: 'chat',
        component: <ChatApp />,
        label: 'Chat'
    },
    {
        path: 'about',
        component: <AboutUs />,
        label: 'About us'
    },
    {
        path: 'admin',
        component: <AdminApp />,
        label: 'Admin Only'
    }
]

export default routes