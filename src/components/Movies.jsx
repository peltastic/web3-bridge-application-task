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
  const liked = (index, like) => {
    const sort = [...data];
    if (like === "like") {
      sort[index].likes += 1;
      sort[index].price +=2
      sort[index].liked = true;
    } else {
      sort[index].likes -= 1;
      sort[index].price -= 0.3;
      sort[index].liked = false;
    }

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
            index={index}
            likes={item?.likes}
            name={item?.name}
            id={item?.id}
            clicked={liked}
            price={item?.price}
            liked={item?.liked}
          />
        );
      })}
    </div>
  );
}

export default Movies;
