import { useSelector } from "react-redux"

export function GigTableSubheader() {
  const isBuyer = useSelector((state) => state.userModule.isBuyer)
  const subheaders = useSelector(
    (state) => state.userModule.tableByUserState.subheaders
  )
  return (
    <div className="flex align-center subheader table-subheader">
      <div className="flex subheader-one">
        {subheaders.map((sh) => (
          <div key={sh.txt} className={`subheader ${sh.class ? sh.class : ""}`}>
            {sh.txt ? sh.txt : ""}
          </div>
        ))}
      </div>
    </div>
  )
}
