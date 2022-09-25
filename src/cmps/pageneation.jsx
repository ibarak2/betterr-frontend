import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
export function Pageneation() {
  return (
    <div className="pagenation">
      <ul className="flex justify-center align-center clean-list">
        <li className="pagenation-btn-wrapper">
          <a className="pagenation-btn">
            <ChevronLeftIcon />
          </a>
        </li>
        <li className="pagenation-btn-wrapper active">
          <a className="pagenation-btn ">1</a>
        </li>
        <li className="pagenation-btn-wrapper">
          <a className="pagenation-btn">
            <ChevronRightIcon />
          </a>
        </li>
      </ul>
    </div>
  )
}
