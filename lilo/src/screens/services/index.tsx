import React from "react";
import { useState } from "react";
import "./styles.css";
import { CardService } from "../../components/cardService";
import { textService } from "../../util/textservice";
export const Services = () => {
  const [typeService, setTypeService] = useState<boolean>(true);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "auto",
      }}
    >
      <hr className="line" />
      <div className="containerOption">
        <button onClick={() => setTypeService(true)} className="buttonBlue">
          Serviços Externos
        </button>
        <button onClick={() => setTypeService(false)} className="buttonWhite">
          Serviços Internos
        </button>
      </div>
      <CardService
        position="left"
        image={
          typeService
            ? require("../../assets/serviceOne.png")
            : require("../../assets/service.png")
        }
        text={
          typeService
            ? textService.map((item) => item.textServiceOne)
            : textService.map((item) => item.textServiceOneIntern)
        }
      />
      <CardService
        position="right"
        image={
          typeService
            ? require("../../assets/serviceTwo.png")
            : require("../../assets/training.png")
        }
        text={
          typeService
            ? textService.map((item) => item.textServiceTwo)
            : textService.map((item) => item.textServiceTwoIntern)
        }
      />
      <CardService
        position="left"
        image={
          typeService
            ? require("../../assets/serviceFour.png")
            : require("../../assets/consultancy.png")
        }
        text={
          typeService
            ? textService.map((item) => item.textServiceFour)
            : textService.map((item) => item.textServiceFourIntern)
        }
      />
      <CardService
        position="right"
        image={
          typeService
            ? require("../../assets/serviceThree.png")
            : require("../../assets/nets.png")
        }
        text={
          typeService
            ? textService.map((item) => item.textServiceThree)
            : textService.map((item) => item.textServiceThreeIntern)
        }
      />

      <CardService
        position="left"
        image={
          typeService
            ? require("../../assets/serviceTwo.png")
            : require("../../assets/phone.png")
        }
        text={
          typeService
            ? textService.map((item) => item.textServiceFive)
            : textService.map((item) => item.textServiceFiveIntern)
        }
      />
    </div>
  );
};
