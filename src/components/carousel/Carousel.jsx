import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoading/Img";
import PosterFallback from "../../assets/no-poster.png";
import RatingCircle from "../ratingCircle/RatingCircle";
import Genre from "../genres/Genre";

import "./carousel.scss";

const Carousel = ({ data, loading }) => {
    const carouselRef = useRef();
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    // const container = carouselRef.current;
    // const SCROLL_LEFT = container.scrollLeft - (container.offsetWidth + 20);
    // const SCROLL_RIGHT = container.scrollLeft + (container.offsetWidth + 20);

    const navigation = (dir) => {
      const container = carouselRef.current;

      const scrollAmount =
          dir === "left"
              ? container.scrollLeft - (container.offsetWidth + 20)
              : container.scrollLeft + (container.offsetWidth + 20);

      container.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
      });
  };

    const SkItem = () => {
      return(
        <div className="skeletonItem">
          <div className="posterBlock skeleton" />
          <div className="textBlock">
            <div className="title skeleton" />
            <div className="date skeleton" />
          </div>
        </div>
      )
    }

  return (
    <div className="carousel">
        <ContentWrapper>
            <BsFillArrowLeftCircleFill className="carouselLeftNav arrow" onClick={() => navigation("left")} />
            <BsFillArrowRightCircleFill className="carouselRightNav arrow" onClick={() => navigation("right")} />
            {!loading ? (
                <div className="carouselItems" ref={carouselRef}>
                {data?.map((item) => {
                    const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
                    return (
                      <div className="carouselItem" key={item.id} onClick={() =>
                          navigate(`/${item.media_type || endpoint}/${item.id}`)}>
                          <div className="posterBlock">
                            <Img src={posterUrl} alt="movie_poster" />
                            <RatingCircle rating={item.vote_average.toFixed(1)} />
                            <Genre data={item?.genre_ids.slice(0, 2)} />

                          </div>
                          <div className="textBlock">
                            <span className="title">{item.title || item.name}</span>
                            <span className="date">{dayjs(item.release_Date).format("MMM D, YYYY")}</span>
                          </div>
                      </div>
                    )
                  })
                }
              </div>
                ) : (
                  <div className="loadingSkeleton">
                    {SkItem()}
                    {SkItem()}
                    {SkItem()}
                    {SkItem()}
                    {SkItem()}
                  </div>
              )
            }
        </ContentWrapper>
    </div>
  )
}

export default Carousel