import React from "react";

const AboutChef = ({ chef }) => {
  return (
    <div>
      <h2>{chef.name}</h2>
      <h5>Cuisine: {chef.cuisine}</h5>
      <h5>$90 Menu ($90/per person, min.4-max.8 people)</h5>
      {chef.menu_140 ? (
        <h5>$140 Menu ($140/per person, min.4-max.8 people)</h5>
      ) : (
        ""
      )}
      <hr />
      <p>{chef.about}</p>
    </div>
  );
};

export default AboutChef;
