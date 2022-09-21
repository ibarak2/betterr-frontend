export const backofficeGigRoutes = [
  {
    path: "active-gigs",
    label: "Active Gigs",
    txt: "Active",
  },
  {
    path: "gig-pending-approval",
    label: "Gigs Pending Approval",
    txt: "Pending Approval",
  },
  {
    path: "gig-requires-modification",
    label: "Gigs That Require Modification",
    txt: "Require Modification",
  },
  {
    path: "gig-draft",
    label: "Gig Drafts",
    txt: "Draft",
  },
  {
    path: "gig-denied",
    label: "Gigs Denied",
    txt: "Denied",
  },
  {
    path: "gig-paused",
    label: "Gigs Paused",
    txt: "Paused",
  },
]

export const backofficeBuyerOrderRoutes = {
  routes: [
    {
      path: "active-orders",
      label: "Active Orders",
      txt: "Active",
    },
    {
      path: "missing-details",
      label: "Missing Details",
      txt: "Missing Details",
    },
    {
      path: "delivered-orders",
      label: "Delivered Orders",
      txt: "Delivered",
    },
    {
      path: "completed-orders",
      label: "Completed Orders",
      txt: "Completed",
    },
    {
      path: "cancelled-orders",
      label: "Cancelled Orders",
      txt: "Cancelled",
    },
    {
      path: "all-orders",
      label: "All Orders",
      txt: "All",
    },
  ],
  subheaders: [
    { class: "subheader-one", txt: "" },
    { txt: "ORDER DATE" },
    { txt: "DUE ON" },
    { txt: "TOTAL" },
    { txt: "STATUS" },
  ],
}
export const backofficeSellerOrderRoutes = {
  routes: [
    {
      path: "priority-orders",
      label: "Order Priority",
      txt: "Priority",
    },
    {
      path: "active-orders",
      label: "Active Orders",
      txt: "Active",
    },
    {
      path: "late-orders",
      label: "Late Orders",
      txt: "Late",
    },
    {
      path: "delivered-orders",
      label: "Delivered Orders",
      txt: "Delivered",
    },
    {
      path: "completed-orders",
      label: "Completed Orders",
      txt: "Completed",
    },
    {
      path: "cancelled-orders",
      label: "Cancelled Orders",
      txt: "Cancelled",
    },
    {
      path: "starred-orders",
      label: "Starred Orders",
      txt: "Starred",
    },
  ],
  subheaders: [
    { txt: "GIGS", class: "subheader-one" },
    { txt: "IMPRESSIONS" },
    { txt: "CLICKS" },
    { txt: "ORDERS" },
    { txt: "CANCELLATIONS" },
  ],
}
