/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./styles.css";
export const CardAbout = () => {
  const person = require("../../assets/personPc.png");
  return (
    <>
      <div className="containerCardAbout">
        <img src={person} />
        <p className="textAboutLilo">
          A Lilo Tech é uma consultoria em TI sediada em Presidente Prudente,
          inaugurada em 2023. Nosso principal objetivo é fornecer soluções
          tecnológicas inovadoras e eficientes para empresas de todos os
          tamanhos e setores.
        </p>
      </div>
    </>
  );
};
