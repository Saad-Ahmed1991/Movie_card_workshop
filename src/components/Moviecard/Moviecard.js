import React from "react";
import { Rating } from "react-simple-star-rating";

import "./styles.css";

const Moviecard = ({ el, deleteMovie }) => {
  return (
    <div>
      <div>
        <div className="wrapper">
          <div className="main_card">
            <div className="card_left">
              <div className="card_datails">
                <h1>{el.title}</h1>
                <div className="card_cat">
                  <p className="PG">PG - 13</p>
                  <p className="year">2018</p>
                  <p className="genre">Action | Adventure </p>
                  <p className="time">2h 28m</p>
                </div>
                <p className="disc">{el.description}</p>
                <div className="social-btn">
                  {/* WATCH TRAILER*/}
                  <button
                    onClick={() => {
                      window.open(el.trailerSrc, "_blank");
                    }}
                  >
                    <i className="fas fa-play" /> SEE TRAILER
                  </button>
                  {/* GET*/}

                  {/*USERS RATINGS*/}
                  <button>
                    <Rating
                      size={20}
                      readonly={true}
                      initialValue={el.rating}
                    />
                  </button>
                  <button onClick={() => deleteMovie(el.id)}>Delete</button>
                  {/*BOOKMARK*/}
                </div>
              </div>
            </div>
            <div className="card_right">
              <div className="img_container">
                <img src={el.posterUrl} alt="" />
              </div>
              <div className="play_btn">
                <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                  <i className="fas fa-play-circle" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* FOLLOW */}
      </div>
    </div>
  );
};

export default Moviecard;
