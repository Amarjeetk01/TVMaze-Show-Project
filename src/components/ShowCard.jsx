import React from "react";
import { useNavigate } from "react-router-dom";
import PosterFallback from "../assets/no-poster.png";

const ShowCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="card show-card"
        style={{ width: "16rem" }}
        onClick={() => navigate(`/shows/${data.show.id}`)}
      >
        <img
          src={data.show?.image?.medium || PosterFallback}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{data.show.name}</h5>
          {data.show.genres?.map((genre, index, genresArray) => (
            <span key={index}>
              {genre}
              {index !== genresArray.length - 1 && "/"}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowCard;
