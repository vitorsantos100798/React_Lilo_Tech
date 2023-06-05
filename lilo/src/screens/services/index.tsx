import "./styles.css";
import { CardService } from "../../components/cardService";
import { textService } from "../../util/textservice";
export const Services = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "auto",
      }}
    >
      <hr className="line" />
      <CardService
        position="left"
        image={require("../../assets/serviceOne.png")}
        text={textService.map((item) => item.textServiceOne)}
      />
      <CardService
        position="right"
        image={require("../../assets/serviceTwo.png")}
        text={textService.map((item) => item.textServiceTwo)}
      />
      <CardService
        position="left"
        image={require("../../assets/serviceThree.png")}
        text={textService.map((item) => item.textServiceThree)}
      />
      <CardService
        position="right"
        image={require("../../assets/serviceFour.png")}
        text={textService.map((item) => item.textServiceFour)}
      />
      <CardService
        position="left"
        image={require("../../assets/serviceTwo.png")}
        text={textService.map((item) => item.textServiceFive)}
      />
    </div>
  );
};
