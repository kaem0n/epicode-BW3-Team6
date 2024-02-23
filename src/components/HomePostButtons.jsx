import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";

const HomePostButtons = () => {
  const [show, setShow] = useState(false);
  const proPic = useSelector((state) => state.profile.profile.image);

  return (
    <>
      <div className="border-bottom py-1 mb-1 d-flex justify-content-between align-items-center">
        <div>
          <i className="fa-regular fa-thumbs-up text-secondary"></i>{" "}
          <a
            href="#"
            className="text-secondary nav-profile-premium link-underline link-underline-opacity-0 link-underline-opacity-100-hover me-2"
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
      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-white text-secondary fw-semibold cdi py-2 px-sm-2 px-1"
        >
          <i className="bi bi-hand-thumbs-up me-1"></i>
          <span className="fs-7 none ">Consiglia</span>
        </button>
        <button
          type="button"
          className="btn btn-white text-secondary fw-semibold cdi py-2 px-sm-2 px-1"
          onClick={() => {
            setShow(!show);
          }}
        >
          <i className="fa-regular fa-comment-dots me-1"></i>
          <span className="fs-7 none">Commenta</span>
        </button>
        <button
          type="button"
          className="btn btn-white text-secondary fw-semibold cdi py-2 px-sm-2 px-1"
        >
          <i className="fa-solid fa-retweet me-1"></i>
          <span className="fs-7 none">Diffondi</span>
        </button>
        <button
          type="button"
          className="btn btn-white text-secondary fw-semibold cdi py-2 px-sm-2 px-1"
        >
          <i className="fa-solid fa-paper-plane me-1"></i>
          <span className="fs-7 none">Invia</span>
        </button>
      </div>
      {show && (
        <Form className="mt-2 d-flex align-items-center">
          <img
            src={proPic}
            alt="user.image"
            height="48px"
            width="48px"
            className="rounded-circle objectfit-cover me-2 pointer"
          />
          <Form.Control
            placeholder="Aggiungi un commento..."
            className="rounded-pill fs-7 border-secondary"
          />
        </Form>
      )}
    </>
  );
};

export default HomePostButtons;
