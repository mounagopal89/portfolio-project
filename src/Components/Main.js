import "./Main.css";
import React from "react";
import myData from "../myData";
function Main() {
  return (
    <React.Fragment>
      <div className="row banner">
        <div className="banner-text ">
          <h1 className="responsive-headline text-center">
            I am Mounika Jakkani
          </h1>
          <h3>
            {" "}
            I am passionate about creating beautiful and intuitive user
            interfaces that make a difference in people's lives.
          </h3>
          <hr />
          <ul className="social">
            {myData.socialLinks.map((item) => {
              return (
                <li key={item.name}>
                  <a href={item.url}>
                    <i className={item.className}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <p className="scrollarrow">
        <i class="fa-solid fa-circle-chevron-down fa-2xl"></i>
      </p>
    </React.Fragment>
  );
}
export default Main;
