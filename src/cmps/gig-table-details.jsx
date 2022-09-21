export function GigTableDetails({ gigDetails }) {
  console.log('gigDetails', gigDetails);
  return (
    <div className="table-details table-row-header">
      {gigDetails.gig.title}
    </div>
  )
}
