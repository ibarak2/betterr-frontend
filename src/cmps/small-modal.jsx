export function SmallModal({ list, onSelect, open }) {
  const handleClick = (ev) => {
    onSelect(ev)
  }
  return (
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
  )
}
