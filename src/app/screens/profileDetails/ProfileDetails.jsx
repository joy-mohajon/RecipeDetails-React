import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import classes from "./ProfileDetails.module.css";

import { chefProfileData } from "../data/Data";
import AboutChef from "../aboutChef/AboutChef";
import AboutMenu from "../aboutMenu/AboutMenu";
import Booking from "../booking/Booking";

const ProfileDetails = () => {
  const { id, name } = useParams();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const chefProfile = chefProfileData.filter(
      (profile) => profile.id === Number(id)
    );
    setProfile(chefProfile);
  }, []);

  return (
    <Container className={classes.containerr}>
      {profile.map((chef) => {
        return (
          <>
            <Row>
              <Col lg={6}>
                <img src={chef.profileImage} alt="" className={classes.img} />
              </Col>
              <Col lg={6}>
                <AboutChef chef={chef} />
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <AboutMenu chef={chef} />
              </Col>
              <Col lg={6}>
                <Booking />
              </Col>
            </Row>
          </>
        );
      })}
    </Container>
  );
};

export default ProfileDetails;
