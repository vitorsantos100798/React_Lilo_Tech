import React from "react";
import "./styles.css";
export const Contact = () => {
  return (
    <>
      <div className="containerContact">
        <div className="containerSpeak">
          <p className="textHeader">Fale Conosco</p>
        </div>
        <div className="containerInput">
          <div>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Telefone" />
          </div>
          <div>
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Assunto" />
          </div>
        </div>
        <div className="containerMenssage">
          <input type="text" placeholder="Menssagem..." />
          <button>Enviar</button>
        </div>
      </div>
    </>
  );
};
