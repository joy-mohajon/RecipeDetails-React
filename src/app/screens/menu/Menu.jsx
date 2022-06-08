import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ChefProfile from "../chefProfile/ChefProfile";
import classes from "./Menu.module.css";

import { chefProfileData } from "../data/Data";

// import recipeImage_1 from "../../images/chefRecipe/chop.jpg";
// import recipeImage_2 from "../../images/chefRecipe/france.jpg";
// import recipeImage_3 from "../../images/chefRecipe/italy.jpg";
// import recipeImage_4 from "../../images/chefRecipe/oman.jpg";

// import profile1 from "../../images/profile/avatar5.png";
// import profile2 from "../../images/profile/avatar2.png";
// import profile3 from "../../images/profile/avatar3.jpg";
// import profile4 from "../../images/profile/avatar4.png";

export default function Menu() {
  const [chefData, setChefData] = useState(chefProfileData);

  return (
    <Container>
      <Row>
        <div className={classes.menu_book} id="menu-book">
          <h1>Menu</h1>
          <p>
            Please click the link below your preferred menu to book the chef.
          </p>
          <div className={classes.menu_type}>
            <div>New American</div>
            <div>International/Mediterranean</div>
            <div>Family Style/Catering</div>
            <div>French/Italian</div>
            <div>Asian/Japanese</div>
            <div>Sushi Omakase</div>
          </div>
        </div>
      </Row>
      <Row>
        {chefData.map((profile) => (
          <Col lg={3} key={profile.id}>
            <ChefProfile profile={profile} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
