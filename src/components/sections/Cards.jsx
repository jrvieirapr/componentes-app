import React from "react";
import "./Sections.css";
import GenericCard from "../commons/cards/GenericCards";
import DynamicCarousel from "../commons/carousel/DinamicCarousel";
import GenericCardTitle from "../commons/cards/GenericCardTitle";
import GenericCardBody from "../commons/cards/GenericCardBody";
import GenericCardText from "../commons/cards/GenericCardText";
import GenericCardHeader from "../commons/cards/GenericCardHeader";
import GenericCardFooter from "../commons/cards/GenericCardFooter";
import GenericModal from "../commons/modal/Modal";
const Cards = () => {
  const images = [
    "https://via.placeholder.com/800x400?text=Slide%201",
    "https://via.placeholder.com/800x400?text=Slide%202",
    "https://via.placeholder.com/800x400?text=Slide%203",
  ];
  const onClickClose = () => {
    console.log("Apertei o close");
  };

  const onClickAgree = () => {
    console.log("Apertei o agree");
  };

  return (
    <div className="div-generic">
      <div className="div-generic">
        <h2>Cards</h2>
        <p>
          Para usar os cards envie os props necessarios: header, title,
          subtitle, content, footer, images, link,
        </p>
        <div>
          <h3>Cards simples</h3>
          <div className="col-6">
            <GenericCard>
              <GenericCardHeader header="Cards" />
              <GenericCardBody>
                <GenericCardTitle title="Titulo" subtitle="subtitle" />
                <DynamicCarousel images={images} />
                <GenericCardText text="Texto do Card" />
              </GenericCardBody>
              <GenericCardFooter footer="footer" />
            </GenericCard>
          </div>
        </div>
      </div>
      <div className="div-generic">
        <h2>Modal</h2>
        <p>
          Para usar os cards envie os props necessarios: launchText, modalTitle,
          closeText, makeText, modalText,
        </p>
        <div>
          <h3>Modal simples</h3>
          <div className="col-6">
            <GenericModal
              launchText="Abrir Modal"
              modalTitle="Teste Modal"
              closeText="Fechar"
              closeCss={"btn btn-primary"}
              closeClick={onClickClose}
              agreeText="Remover"
              agreeCSS="btn btn-danger"
              agreeClick={onClickAgree}
              modalText="Teste de modal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
