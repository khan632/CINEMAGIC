import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import avatar from "../../../assets/avatar.png";

const Upcoming = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/upcoming`
    );

    return (
        <Carousel
            title="Upcoming"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Upcoming;