import DeleteExperienceModal from './DeleteExperienceModal'
import ModifyExperienceModal from './ModifyExperienceModal'

/* eslint-disable react/prop-types */
const ExperienceElement = (props) => {
  const formatDate = (date) => {
    return date.slice(0, date.indexOf('T')).replace('-', '/').replace('-', '/')
  }

  return (
    <div className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
      <div className="d-flex">
        <img
          src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1716422400&v=beta&t=5MUJe7JW7qN_AhLIvXWy09nSa-yX3GS-ThImsm3_xqE"
          alt="logo1"
          width="48px"
          height="48px"
          className="pointer"
        />
        <div className="ms-2">
          <a
            href="#"
            className="text-black nav-profile-premium fw-semibold link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
          >
            {props.company}
          </a>
          <p className="text-secondary fs-7 m-0">
            Inizio: {formatDate(props.start)} - Fine: {formatDate(props.end)}
          </p>
          <p className="text-secondary fs-7 m-0">Ruolo: {props.role}</p>
          <p className="text-secondary fs-7 m-0">
            Mansioni: {props.description}
          </p>
        </div>
      </div>
      <div className="d-flex">
        <ModifyExperienceModal
          id={props.id}
          api={props.api}
          userId={props.userId}
          trigger={props.trigger}
          company={props.company}
          role={props.role}
          description={props.description}
          area={props.area}
          start={props.start}
          end={props.end}
        />
        <DeleteExperienceModal
          id={props.id}
          api={props.api}
          userId={props.userId}
          trigger={props.trigger}
          company={props.company}
        />
      </div>
    </div>
  )
}

export default ExperienceElement
