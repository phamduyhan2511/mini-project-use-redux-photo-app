import React, { Fragment } from "react";
import "./Banner.scss";

Banner.propTypes = {};

function Banner(props) {
  const {title, backgroundUrl} = props;
  const bannerStyle = backgroundUrl ? {backgroundImage: `url(${backgroundUrl})`} : {};
  return (
    <Fragment>
      <section className="banner" style={bannerStyle}>
        <h1 className="banner__title">{title}</h1>
      </section>
    </Fragment>
  );
}

export default Banner;
