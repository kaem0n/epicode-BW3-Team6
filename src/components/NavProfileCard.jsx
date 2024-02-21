import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const NavProfileCard = () => {
  const profile = useSelector((state) => state.profile.profile)
  const navigate = useNavigate()

  return (
    <NavDropdown
      className="d-flex justify-content-center align-items-center border-end"
      align={{ sm: 'end' }}
      title={
        <div className="d-flex flex-column justify-content-center align-items-center">
          {profile && (
            <img
              width="24"
              src={profile.image}
              height="24"
              alt="user"
              className="rounded-circle dropdown-toggle objectfit-cover"
              role="button"
            />
          )}
          <div className="dropdown-toggle d-none d-md-block">Tu</div>
        </div>
      }
      id="collapsible-nav-dropdown"
    >
      <div className="px-2">
        <div className="d-flex flex-column pb-2 border-bottom">
          {profile && (
            <div className="d-flex align-items-center mb-2 pointer">
              <img
                src={profile.image}
                alt={profile._id}
                width="60px"
                height="60px"
                className="me-2 rounded-circle objectfit-cover"
              />
              <div className="d-flex flex-column">
                <p className="m-0 fw-semibold">
                  {profile.name} {profile.surname}
                </p>
                <p className="m-0 fs-7">{profile.title}</p>
              </div>
            </div>
          )}
          <Button
            variant="outline-primary"
            className="fs-7 rounded-5 py-0 fw-semibold"
            onClick={() => {
              navigate('/profile')
            }}
          >
            Visualizza profilo
          </Button>
        </div>
        <div className="px-1 pb-2 border-bottom">
          <p className="mb-1 mt-2 fw-semibold">Account</p>
          <p className="mb-1 ps-1 fs-7 fw-semibold">
            <i className="fa-solid fa-square text-warning me-2"></i>
            <a href="#" className="text-secondary nav-profile-premium">
              Prova Premium per 0 EUR
            </a>
          </p>
          <p className="mb-1 ps-1 fs-7">
            <a href="#" className="text-secondary nav-profile-link">
              Impostazioni e privacy
            </a>
          </p>
          <p className="mb-1 ps-1 fs-7">
            <a href="#" className="text-secondary nav-profile-link">
              Guida
            </a>
          </p>
          <p className="mb-1 ps-1 fs-7">
            <a href="#" className="text-secondary nav-profile-link">
              Lingua
            </a>
          </p>
        </div>
        <div className="px-1 pb-2 border-bottom">
          <p className="mb-1 mt-2 fw-semibold">Gestisci</p>
          <p className="mb-1 ps-1 fs-7">
            <a href="#" className="text-secondary nav-profile-link">
              Post e attività
            </a>
          </p>
          <p className="mb-1 ps-1 fs-7">
            <a href="#" className="text-secondary nav-profile-link">
              Account per la pubblicazione di off
            </a>
            <span className="text-secondary">...</span>
          </p>
        </div>
        <p className="mb-0 mt-1 ps-2 fs-7">
          <a href="#" className="text-secondary nav-profile-link">
            Esci
          </a>
        </p>
      </div>
    </NavDropdown>
  )
}

export default NavProfileCard
