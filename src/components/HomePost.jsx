/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card'
import HomePostButtons from './HomePostButtons'
import { useSelector } from 'react-redux'
import DeletePostModal from './DeletePostModal'
import ModifyPostModal from './ModifyPostModal'

const HomePost = ({ post, trigger }) => {
  const profile = useSelector((state) => state.profile.profile)

  const formatDate = (date) => {
    return date.slice(0, date.indexOf('T')).replace('-', '/').replace('-', '/')
  }

  const formatHour = (date) => {
    return date.slice(date.indexOf('T') + 1, date.length).slice(0, 5)
  }

  return (
    <Card className="mb-2">
      {profile && profile._id === post.user._id && (
        <div className="border-bottom  p-1 d-flex justify-content-end">
          <ModifyPostModal id={post._id} trigger={trigger} text={post.text} />
          <DeletePostModal id={post._id} trigger={trigger} />
        </div>
      )}
      <Card.Body className="px-0 pt-2 pb-1">
        <div className="d-flex align-items-center mb-2 px-3">
          <img
            src={post.user.image}
            alt={post.user._id}
            height="48px"
            width="48px"
            className="rounded-circle objectfit-cover me-2 pointer"
          />
          <div>
            <a
              href="#"
              className="text-black nav-profile-premium fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover fs-7"
            >
              {post.user.name} {post.user.surname}{' '}
              {'(' + post.user.username + ')' || ''}
            </a>
            <p className="m-0 fs-8 text-secondary pointer">
              {post.user.title || 'FS0723'} - {post.user.area || 'Paperino, IT'}
            </p>
            <p className="m-0 fs-8 text-secondary pointer">
              Pubblicato il: {formatDate(post.createdAt)} alle{' '}
              {formatHour(post.createdAt)} <i className="bi bi-dot"></i>{' '}
              <i className="fa-solid fa-earth-europe"></i>
            </p>
          </div>
        </div>
        <div className="px-3">
          <p className="fs-7">{post.text}</p>
        </div>
        {post.image && (
          <img src={post.image} alt={post._id} className="w-100 pointer" />
        )}
        <div className="px-3 fs-8">
          <div className="border-bottom py-1 mb-1 d-flex justify-content-between align-items-center">
            <div>
              <i className="fa-regular fa-thumbs-up text-secondary"></i>{' '}
              <a
                href="#"
                className="text-secondary nav-profile-premium link-underline link-underline-opacity-0 link-underline-opacity-100-hover me-2"
              >
                0
              </a>
              <i className="fa-solid fa-heart text-secondary"></i>{' '}
              <a
                href="#"
                className="text-secondary nav-profile-premium link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
              >
                0
              </a>
            </div>
            <a
              href="#"
              className="text-secondary nav-profile-premium link-underline link-underline-opacity-0 link-underline-opacity-100-hover me-2"
            >
              0 Commenti
            </a>
          </div>
          <HomePostButtons />
        </div>
      </Card.Body>
    </Card>
  )
}

export default HomePost
