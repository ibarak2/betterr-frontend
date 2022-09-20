import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
export function OpenModalBtn({ id, handleOpenModal, txt }) {
  const showModal = () => {
    handleOpenModal()
  }
  return (
    <div className="open-modal-btn" name={id} id={id} onClick={showModal}>
      {txt}
      <ArrowDropDownIcon />
    </div>
  )
}
