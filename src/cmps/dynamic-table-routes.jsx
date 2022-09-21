import { GigDataTable } from "./gig-data-table"
// get the details from the reducer
const ActiveGigs = () => {
  return <GigDataTable title="Active Gigs" />
}
const GigDenied = () => {
  return <GigDataTable title={"gigs denied"} />
}
const GigPaused = () => {
  return <GigDataTable title={"gigs paused"} />
}
const GigDraft = () => {
  return <GigDataTable title={"Gig Drafts"} />
}
const GigRequiresModification = () => {
  return <GigDataTable title={"Gigs Require Modification"} />
}
const GigPendingApproval = () => {
  return <GigDataTable title={"gigs pending approval"} />
}
const OrderPriority = () => {
  return <GigDataTable title={"PRIORITY ORDERS"} />
}
const ActiveOrders = () => {
  return <GigDataTable title={"Active Orders"} />
}
const LateOrders = () => {
  return <GigDataTable title={"Late Orders"} />
}
const DeliveredOrders = () => {
  return <GigDataTable title={"Delivered Orders"} />
}

const CompletedOrders = () => {
  return <GigDataTable title={"completed Orders"} />
}

const CancelledOrders = () => {
  return <GigDataTable title={"Cancelled Orders"} />
}

const StarredOrders = () => {
  return <GigDataTable title={"Starred Orders"} />
}
const MissingDetails = () => {
  return <GigDataTable title={"Orders with Missing Details"} />
}
const AllOrders = () => {
  return <GigDataTable title={"All Orders"} />
}

export {
  AllOrders,
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
}
