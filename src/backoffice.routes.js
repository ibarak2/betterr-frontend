// export const backofficeGigRoutes = [
//   {
//     path: "active-gigs",
//     label: "Active Gigs",
//     txt: "Active",
//   },
//   {
//     path: "gig-pending-approval",
//     label: "Gigs Pending Approval",
//     txt: "Pending Approval",
//   },
//   {
//     path: "gig-requires-modification",
//     label: "Gigs That Require Modification",
//     txt: "Require Modification",
//   },
//   {
//     path: "gig-draft",
//     label: "Gig Drafts",
//     txt: "Draft",
//   },
//   {
//     path: "gig-denied",
//     label: "Gigs Denied",
//     txt: "Denied",
//   },
//   {
//     path: "gig-paused",
//     label: "Gigs Paused",
//     txt: "Paused",
//   },
// ]

export const backofficeBuyerOrderRoutes = {
  routes: [
    {
      path: "active-orders",
      label: "Active Orders",
      txt: "Active",
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
    { txt: "price" },
    { txt: "STATUS" },
    { txt: "Actions" },
  ],
}

export const backofficeSellerOrderRoutes = {
  routes: [
    {
      path: "active-orders",
      label: "Active Orders",
      txt: "Active",
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
      label: "All",
      txt: "All",
    },

  ],
  subheaders: [
    { txt: "GIGS", class: "subheader-one" },
    { txt: "Due on" },
    { txt: "Price" },
    { txt: "status" },
    { txt: "Actions" },
  ],
}
