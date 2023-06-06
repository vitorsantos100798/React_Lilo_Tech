import "./styles.css";

export const Main = () => {
  const person = require("../../assets/person.png");
  return (
    <div className="containerMain">
      <div className="containerHeadline">
        <p className="text">Alavanque Seu Negócio</p>
        <p className="text">Com a Consultoria </p>
        <p className="text">Estratégica em TI</p>
      </div>
      <div className="containerImage">
        <img style={{ height: 500, width: 500 }} src={person} />
      </div>
    </div>
  );
};
