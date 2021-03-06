import React from "react";
import Block from "../../components/Block/Block";
import ContentTitle from "../../components/Block/ContentTitle/ContentTitle";
import Form from "../../components/Form/Form";
import PageBanner from "../../components/PageBanner/PageBanner";
import client from '../../content/client.js'


export default function Contacts() {
  return (
    <>
      <PageBanner classes="contacts" />
      <div className="contacts">
        <div className="container">
          <Block title="Контакты">
            <div className="contacts_item">
              <span>Телефон: </span>
              <a href={client.phone.link}>{client.phone.tel}</a> (с 10:00 до 20:00, кроме
              выходных)
            </div>
            <div className="contacts_item">
              <span>Адрес: </span>г. Москва, ул. Ленинские горы д. 1
            </div>
          </Block>
          <ContentTitle>Получите персональную консультацию бесплатно</ContentTitle>
          <Form />
        </div>
      </div>
    </>
  );
}
