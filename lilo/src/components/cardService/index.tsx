import "./styles.css";

type PropsService = {
  image: string;
  text: string[];
  position?: "left" | "right";
};
export const CardService = ({ image, text, position }: PropsService) => {
  return (
    <>
      {position === "left" ? (
        <div className="containerCard">
          <img src={image} />
          <p
            style={{
              color: "white",
              fontFamily: "Arial",
              fontWeight: "bold",
              fontSize: 24,
              marginLeft: 12,
            }}
          >
            {text}
          </p>
        </div>
      ) : position === "right" ? (
        <div className="containerCard">
          <p
            style={{
              color: "white",
              fontFamily: "Arial",
              fontWeight: "bold",
              fontSize: 24,
            }}
          >
            {text}
          </p>
          <img src={image} />
        </div>
      ) : null}
    </>
  );
};
