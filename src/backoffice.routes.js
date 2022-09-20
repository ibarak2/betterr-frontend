import {
  StarredOrders,
  CompletedOrders,
  MissingDetails,
  CancelledOrders,
  OrderPriority,
  ActiveGigs,
  GigDenied,
  GigPaused,
  GigDraft,
  GigRequiresModification,
  GigPendingApproval,
  ActiveOrders,
  LateOrders,
  DeliveredOrders,
  AllOrders,
} from "./cmps/dynamic-table-routes.jsx"

export const backofficeGigRoutes = [
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

export const backofficeBuyerOrderRoutes = [
  {
    path: "active-orders",
    component: <ActiveOrders />,
    label: "ActiveOrders",
  },
  {
    path: "missing-details",
    component: <MissingDetails />,
    label: "MissingDetails",
  },
  {
    path: "delivered-orders",
    component: <DeliveredOrders />,
    label: "DeliveredOrders",
  },
  {
    path: "completed-orders",
    component: <CompletedOrders />,
    label: "CompletedOrders",
  },
  {
    path: "cancelled-orders",
    component: <CancelledOrders />,
    label: "CancelledOrders",
  },
  {
    path: "all-orders",
    component: <AllOrders />,
    label: "AllOrders",
  },
]

export const backofficeSellerOrderRoutes = [
  {
    path: "priority-orders",
    component: <OrderPriority />,
    label: "OrderPriority",
  },
  {
    path: "active-orders",
    component: <ActiveOrders />,
    label: "ActiveOrders",
  },
  {
    path: "late-orders",
    component: <LateOrders />,
    label: "LateOrders",
  },
  {
    path: "delivered-orders",
    component: <DeliveredOrders />,
    label: "DeliveredOrders",
  },
  {
    path: "completed-orders",
    component: <CompletedOrders />,
    label: "CompletedOrders",
  },
  {
    path: "cancelled-orders",
    component: <CancelledOrders />,
    label: "CancelledOrders",
  },
  {
    path: "starred-orders",
    component: <StarredOrders />,
    label: "StarredOrders",
  },
]
