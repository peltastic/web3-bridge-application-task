import classes from "../styles/movie.module.css";
import { AiTwotoneLike } from "react-icons/ai";
import { useEffect, useState } from "react";
function Movie({ likes, name, id, clicked, price }) {
  const [likesCount, setLikesCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLikesCount(likes);
  }, [likes]);
  const LikesHandler = () => {
    clicked();
    if (liked) {
      setLikesCount((state) => (state -= 1));
      setLiked(!liked);
    } else {
      setLikesCount((state) => (state += 1));
      setLiked(!liked);
    }
  };
  return (
    <div className={classes.Movie}>
      <h1>{name}</h1>
      <div className="" onClick={LikesHandler}>
        <h1 style={{ fontSize: "20px" , marginRight: "10px"}}>${price}</h1>
        <AiTwotoneLike
          style={{ color: `${liked ? "#d89606" : "black"}`, cursor: "pointer" }}
        />
        {likesCount ? <p>{likesCount}</p> : null}
      </div>
    </div>
  );
}

export default Movie;
