import React from "react";
import { useParams } from "react-router-dom";
import "./details.scss";

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videoSection/VideosSection";
import Similar from "./carousel/Similar";
import Upcoming from "./carousel/Upcoming";

const Details = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );
    return (
        <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} loading={creditsLoading} />
            <VideosSection data={data} loading={loading} />
            <Similar mediaType={mediaType} id={id} />
            <Upcoming mediaType={mediaType} id={id} />
        </div>
    );
};

export default Details;