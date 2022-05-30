import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Banner from "../../componants/home/banner/Banner";
import CommentSection from "../../componants/home/commentSecsion/CommentSection";
import RecipeDetailes from "../../componants/home/recipeDetailes/RecipeDetailes";
import SocialMedia from "../../componants/home/socialMedia/SocialMedia";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <div className={classes.backgroundImage}>
      <div className={classes.main}>
        <div className={classes.wrap}>
          <Container>
            <h1>How To Make Chicken Jerky – Start To Finish</h1>
            <Row>
              <Col lg={6}>
                <Banner />
              </Col>
              <Col lg={3}>
                <RecipeDetailes />
              </Col>
              <Col lg={3}>
                <SocialMedia />
              </Col>
            </Row>
            <Row>
              <Col lg={9}>
                <CommentSection />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
