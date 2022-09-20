import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

export function SmallModal({ list, onSelect, open, id, handleOpenModal, txt }) {
  const showModal = () => {
    handleOpenModal()
  }
  const handleClick = (ev) => {
    onSelect(ev)
  }
  return (
    <div style={{ position: "relative" }}>
      <div className="small-modal-open-modal-btn" name={id} id={id} onClick={showModal}>
        {txt}
        <ArrowDropDownIcon />
      </div>
      <ul
        className="clean-list small-modal"
        style={open ? {} : { display: "none" }}
      >
        {list.map((option) => (
          <li
            onClick={(ev) => handleClick(ev)}
            key={option.value}
            value={option.value}
          >{`${option.txt}`}</li>
        ))}
      </ul>
    </div>
  )
}
