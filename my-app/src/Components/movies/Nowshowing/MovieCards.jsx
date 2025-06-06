import React from "react";
import MovieCard from "./MovieCard";
import placeholder from "../../../Assets/nowshowmovies/airplane.jpg";
import movie1 from "../../../Assets/nowshowmovies/back-to-the-future.jpg";
import movie2 from "../../../Assets/nowshowmovies/et.jpg";
import movie3 from "../../../Assets/nowshowmovies/exorcist.jpg";
import movie4 from "../../../Assets/nowshowmovies/gatsby.jpg";
import movie5 from "../../../Assets/nowshowmovies/indian-jones.png";
import movie6 from "../../../Assets/nowshowmovies/jaws.jpg";
import movie7 from "../../../Assets/nowshowmovies/parasite.jpg";
import movie8 from "../../../Assets/nowshowmovies/pirates.jpg";
import movie9 from "../../../Assets/nowshowmovies/rocketeer.jpg";
import movie10 from "../../../Assets/nowshowmovies/tunderbolts.png";
import movie11 from "../../../Assets/nowshowmovies/un-ex.png";
import "./MovieCards.css";

const MovieCards = () => {
    return (
        <div className="movie-cards-container">
            <MovieCard image={placeholder} price="$300" time="2:30 PM - 5:00 PM" date="April 1 - March 2" />
            <MovieCard image={movie1} price="$250" time="1:00 PM - 3:30 PM" date="March 10 - April 5" />
            <MovieCard image={movie2} price="$180" time="4:00 PM - 6:30 PM" date="April 15 - May 1" />
            <MovieCard image={movie3} price="$220" time="5:00 PM - 7:30 PM" date="May 2 - May 20" />
            <MovieCard image={movie4} price="$210" time="12:00 PM - 2:30 PM" date="May 5 - May 25" />
            <MovieCard image={movie5} price="$275" time="3:00 PM - 5:30 PM" date="May 8 - June 1" />
            <MovieCard image={movie6} price="$240" time="1:30 PM - 4:00 PM" date="June 10 - July 5" />
            <MovieCard image={movie7} price="$195" time="4:30 PM - 7:00 PM" date="July 1 - July 20" />
            <MovieCard image={movie8} price="$310" time="6:00 PM - 8:30 PM" date="July 25 - Aug 10" />
            <MovieCard image={movie9} price="$230" time="11:00 AM - 1:30 PM" date="Aug 15 - Sept 1" />
            <MovieCard image={movie10} price="$260" time="2:00 PM - 4:30 PM" date="Sept 5 - Sept 25" />
            <MovieCard image={movie11} price="$280" time="6:30 PM - 9:00 PM" date="Oct 1 - Oct 20" />
        </div>
    );
};

export default MovieCards;
