import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PosterFallback from "../../assets/no-poster.png";
import "./styles.css";
import ReactCountryFlag from "react-country-flag";
import BookingForm from "../../components/BookingForm";
import useFetch from "../hook/useFetch";

const Details = () => {
  // https://api.tvmaze.com/shows/42181
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);
  const { data, loading } = useFetch(`shows/${id}`);
  const handleBookTicket = () => {
    setShowForm(true);
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    window.scrollTo({ top: scrollHeight, behavior: "smooth" });
  };
  if (loading) {
    return <p style={{color:'white'}}>Loading...</p>;
  }

  if (!data) {
    return <p>Error fetching data.</p>;
  }

  return (
    <div className="detail-container">
      <div className="card mb-3 p-3 detail-card" style={{ maxWidth: "70vw" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={data?.image?.original || PosterFallback}
              className="img-fluid rounded-start"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-1 fw-bold">{data?.name}</h5>
              <p className="card-text">
                <small  className="text-body-secondary fs-6">
                  <ReactCountryFlag
                    countryCode={data?.network?.country?.code}
                    svg
                  />{" "}
                  | {data?.network?.name}{" "}
                  {data?.premiered && data?.ended
                    ? `(${parseInt(data?.premiered.split("-")[0])} - ${parseInt(
                        data?.ended.split("-")[0]
                      )})`
                    : " "}
                </small>
              </p>
              <div className="genres">
                {data?.genres?.map((genre, index) => (
                  <span key={index} className="genre">
                    {genre}
                  </span>
                ))}
              </div>
              <div className="rating-info">
                <span className="star">{data?.rating?.average}</span>
                <button type="button" className="btn btn-book btn-secondary"
                onClick={handleBookTicket}
                >
                  Book tickets
                </button>
              </div>
              <p
                className="card-text"
                dangerouslySetInnerHTML={{ __html: data?.summary }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="show-info ">
        <p className="fw-medium fs-2 below-line info-text">Show Info</p>
        <ul>
          <li>Language: {data?.language}</li>
          <li>
            Schedule: 
             {data?.schedule?.days.map((day, index) => (
              <span key={index}> {day}</span>
            ))}{" "}
            at {data?.schedule?.time} ({data?.runtime} min)
          </li>
          <li>Status: {data?.status}</li>
          <li>Show Type: {data?.type}</li>
          <li>Official site: {data?.officialSite}</li>
        </ul>
        {showForm && (
        <BookingForm
          movieName={data?.name}
          onSubmit={() => setShowForm(false)}
        />
      )}
      </div>

    </div>
  );
};

export default Details;
