import "./styles.css";

export const Main = () => {
  const person = require("../../assets/person.png");
  return (
    <div
      style={{
        width: "100%",
        height: "38rem",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p className="text">Alavanque Seu Negócio</p>
        <p className="text">Com a Consultoria </p>
        <p className="text">Estratégica em TI</p>
      </div>
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <img style={{ height: 500, width: 500 }} src={person} />
      </div>
    </div>
  );
};
