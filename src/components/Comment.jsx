/* eslint-disable react/prop-types */
const Comment = (props) => {
  const formatDate = (date) => {
    const year = date.slice(0, 4)
    const month = date.slice(5, 7)
    const day = date.slice(8, 10)
    const hour = date.slice(date.indexOf('T') + 1, date.indexOf('T') + 6)
    return `${day}/${month}/${year} alle ${hour}`
  }

  return (
    <div className="d-flex ">
      <img
        src="https://placekitten.com/500"
        alt="test"
        height="40px"
        width="40px"
        className="rounded-circle objectfit-cover me-1 mt-1 pointer"
      />
      <div className="bg-gray w-100 p-2 fs-7 comment">
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex flex-column mb-1">
            <a
              href="#"
              className="text-black nav-profile-premium fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
            >
              {props.author}
            </a>
            <span className="text-secondary fs-8">FS0723</span>
          </div>
          <span className="text-secondary fs-8">
            Postato il: {formatDate(props.date)}
          </span>
        </div>
        <p className="m-0">{props.comment}</p>
      </div>
    </div>
  )
}

export default Comment
