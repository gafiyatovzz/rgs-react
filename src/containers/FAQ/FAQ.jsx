import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import Block from "../../components/Block/Block";
import PageBanner from "../../components/PageBanner/PageBanner";
import faq from "../../content/faq";

export default function FAQ() {
  return (
    <>
      <PageBanner classes="faq" />
      <div className="faq">
        <div className="container">
          <Block title="Наша гарантия" subtitle='Вы спрашиваете - мы отвечаем'>
            <div className="guarantee_container">
              <Accordion faq={faq}/>
            </div>
          </Block>
        </div>
      </div>
    </>
  );
}
