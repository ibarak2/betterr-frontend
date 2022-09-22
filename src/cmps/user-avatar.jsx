export function UserAvatar({ imgUrl, fullname, height }) {
  return (
    <img
      className="user-avatar"
      src={imgUrl}
      alt={fullname}
      style={{ height: `${height}px`, width: `${height}px` }}
    />
  )
}
