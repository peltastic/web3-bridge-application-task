import classes from "../styles/movies.module.css";
import Movie from "./Movie";
import { movies } from "../data/movies";
import { useEffect, useState } from "react";
function Movies() {
  const [data, setData] = useState([]);
  useEffect(() => {
    movies.sort((a, b) => {
      return b.likes - a.likes;
    });
    setData(movies);
  }, [movies]);
  const liked = () => {
    const sort = [...data];
    sort.sort((a, b) => {
      return b.likes - a.likes;
    });
    setData(sort);
  };
  return (
    <div className={classes.Movies}>
      {data?.map((item, index) => {
        return (
          <Movie
            key={index}
            likes={item?.likes}
            name={item?.name}
            id={item?.id}
            clicked={liked}
            price={item?.price}
          />
        );
      })}
    </div>
  );
}

export default Movies;
