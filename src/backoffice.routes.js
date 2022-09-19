import { ActiveGigs } from "./cmps/active-gigs.jsx"
import { GigPendingApproval } from "./cmps/pending-approval.jsx"
import { GigRequiresModification } from "./cmps/gig-requires-modification.jsx"
import { GigDraft } from "./cmps/gig-draft.jsx"
import { GigDenied } from "./cmps/gig-denied.jsx"
import { GigPaused } from "./cmps/gig-paused.jsx"
// Routes accesible from the navigation (in Backoffice header)
const backofficeRoutes = [
  {
    path: "active-gigs",
    component: <ActiveGigs />,
    label: "ActiveGigs",
  },
  {
    path: "gig-pending-approval",
    component: <GigPendingApproval />,
    label: "GigPendingApproval",
  },
  {
    path: "gig-requires-modification",
    component: <GigRequiresModification />,
    label: "GigRequiresModification",
  },
  {
    path: "gig-draft",
    component: <GigDraft />,
    label: "GigDraft",
  },
  {
    path: "gig-denied",
    component: <GigDenied />,
    label: "GigDenied",
  },
  {
    path: "gig-paused",
    component: <GigPaused />,
    label: "GigPaused",
  },
]

export default backofficeRoutes
