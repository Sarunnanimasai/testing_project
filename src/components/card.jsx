import React from "react";
import { useMemo } from "react";

export const MemoCard = React.memo(({ image, title, desc }) => {
  return (
    <div>
      <img src={image} alt="err" />
      <h1>{title}</h1>
      <h2>{desc}</h2>
    </div>
  );
});

const Card = ({ userid, body, title }) => {
  const myComponent = useMemo(() => {
    return (
      <div>
        <h1>{userid}</h1>
        {/* <img src={logo} alt="err" /> */}
        <h3>{body}</h3>
        {/* <h3>{country}</h3> */}
        <p>{title}</p>
      </div>
    );
  }, [userid, body, title]);
  return <div>{myComponent}</div>;
};

export default Card;
