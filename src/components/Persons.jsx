import { Card, Col } from "react-bootstrap";
import Person from "./Person";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Persons = () => {
  const API_KEY = localStorage.getItem("api-key");
  const [persons, setPersons] = useState([]);
  const profile = useSelector((state) => state.profile);

  const personsFetch = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile`, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((persone) => {
        console.log(persone);
        const surnamesToFilter = [
          "Ruggia Piquer",
          "Sileoni",
          "Frasca",
          "Marchetti",
          "Trimboli",
        ];

        const filteredPersons = persone.filter(
          (persona) =>
            surnamesToFilter.includes(persona.surname) &&
            persona.surname !== profile.profile.surname
        );

        setPersons(filteredPersons);
        console.log(filteredPersons);
      })
      .catch((errore) => {
        console.log("errore nella fetch delle persone", errore);
      });
  };
  useEffect(() => {
    if (profile.profile) {
      personsFetch();
    }
  }, [profile.profile]);

  return (
    <>
      <Col className="mb-5 mb-md-0">
        <Card>
          <Card.Body>
            <Card.Title className="fs-6">
              Persone che potresti conoscere
            </Card.Title>
            <Card.Subtitle className="mb-2 text-secondary fw-normal fs-7">
              Dalla tua scuola o università
            </Card.Subtitle>
            {persons
              ? persons.map((persona) => {
                  return (
                    <>
                      <Person
                        key={persona._id}
                        img={persona.image}
                        name={(persona.name, persona.surname)}
                        title={persona.title}
                        id="#"
                      />
                    </>
                  );
                })
              : "Non ci sono persone consigliate"}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Persons;
