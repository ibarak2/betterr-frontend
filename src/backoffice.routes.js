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
