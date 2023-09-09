import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import './ratingCircle.scss'

const RatingCircle = ({ rating }) => {
    return (
        <div className="circleRating">
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={rating}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                })}
            />
        </div>
    );
}

// array of obj => 

/* 
[
     {}
     {}
     {}
]
*/

//  fun (rating) => {

// }

// switch --> 5.0  5.4 -> #xyx, 5.8 -> #
export default RatingCircle