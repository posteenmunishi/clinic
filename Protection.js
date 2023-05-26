import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import k from "../Images/herbal lucy 2.jpg";
import kk from "../Images/herbal six.jpg";
import kkk from "../Images/LUCY.jpg";
import "./Protection.css"

export const Protection = () => {
  return (
    <div>
      <div className="container">
        <section>
          <h4 className="text-center font-italic text-success">
            
          </h4>
        </section>
        <div className="card bg-black w-100">
          <div className="card-header text-primary text-white">
            Apart from the previous services, the following also are available{" "}
          </div>
        </div>
        <div className="container">
          <img className="lucy img-thumbnail" src={kkk} alt="lucy" />
        </div>
        <div className="row my-3">
          <div className="card border-success">
            <div className="card-header">
              <h4>Busines improvement</h4>
            </div>
          </div>
          <div className="card border-success">
            <div className="card-header">
              <h4>Job promotion</h4>
            </div>
          </div>
          <div className="card border-success">
            <div className="card-header">
              <h4>Lost items</h4>
            </div>
          </div>
          <div className="card border-success">
            <div className="card-header">
              <h4>Court Cases</h4>
            </div>
          </div>
          <div className="card border-success">
            <div className="card-header">
              <h4>Protect Witches & Demons</h4>
            </div>
          </div>
          <div className="card border-success">
            <div className="card-header">
              <h4>Family protection</h4>
            </div>
          </div>
          <div className="card border-success">
            <div className="card-header">
              <h4>Call back lost people</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
