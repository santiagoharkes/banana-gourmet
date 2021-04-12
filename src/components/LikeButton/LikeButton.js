import React, { useEffect, useState } from "react";

import {
  HeartIconActiveStyled,
  HeartIconInactiveStyled,
} from "./LikeButtonElements";

import { useTheme } from "Context/Theme/ThemeContext";
import { useAxios } from "hooks/useAxios";

function LikeButton({ user, producto }) {
  const axios = useAxios();
  const { theme } = useTheme();
  const [likes, setLikes] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const [likeItem, setLikeItem] = useState({});

  useEffect(() => {
    const fetchLikes = () => {
      // console.log("Haciendo el fetch de los likes");
      axios
        .get("/likes")
        .then((valor) => {
          setLikes(valor);
          // console.log("Listo, estos son los likes --- " + likes?.data?.length);
          // console.log({ likes });
        })
        .catch((err) => console.log(err));
    };

    fetchLikes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (likes?.data?.length > 0) {
      const userLikesProduct = likes?.data?.find((valor) => {
        if (
          valor.producto?._id === producto?._id &&
          valor.usuario?._id === user?.user?._id
        ) {
          return true;
        }
        return false;
      });

      if (userLikesProduct && Object.keys(userLikesProduct).length !== 0) {
        setIsLike(true);
        setLikeItem(userLikesProduct);
      } else {
        setIsLike(false);
        setLikeItem({});
      }
    } else {
      setIsLike(false);
      setLikeItem({});
    }
  }, [producto, user, likes]);

  const handleLike = () => {
    setIsLike(!isLike);
    if (isLike && Object.keys(likeItem).length !== 0) {
      axios
        .delete(`/likes/${likeItem._id}`)
        .then((valor) => {
          // console.log("Se eliminó piola");
          setLikeItem({});
        })
        .catch((err) => {
          console.log("Hubo un error");
          console.log(err);
        });
    } else {
      axios
        .post("/likes", { usuario: user.user._id, producto: producto._id })
        .then((valor) => {
          // console.log("Se agregó piola");
          setLikeItem(valor.data);
        });
    }
  };

  return (
    <>
      {user &&
        (isLike ? (
          <HeartIconActiveStyled dark={theme} onClick={handleLike} />
        ) : (
          <HeartIconInactiveStyled dark={theme} onClick={handleLike} />
        ))}
      {/* {user &&
        (likeLoading ? (
          <LittleLoading dark={theme} />
        ) : isLike ? (
          <HeartIconActiveStyled
            dark={theme}
            onClick={() => setIsLike(!isLike)}
          />
        ) : (
          <HeartIconInactiveStyled
            dark={theme}
            onClick={() => setIsLike(!isLike)}
          />
        ))} */}
    </>
  );
}

export default LikeButton;
