import React from "react";
import Banner from "../../components/Banner/Banner";
import Block from "../../components/Block/Block";
import Name from "../../components/Block/Name/Name";

import banner from "../../content/banner.js";
import client from "../../content/client.js";

export default function Main() {
  return (
    <>
      <Banner description={banner.description} client={client} />
      <div className="container">
        <Block title='Об услуге от компании РосГарантСервис' >
          <p>
            Компания <Name /> представляет уникальную услугу на
            российском рынке - гарантийное обслуживание автомобилей с пробегом.
            Сегодня мы занимаем лидирующее положение в этом стремительно
            развивающемся сегменте автомобильного сервиса.
          </p>
          <p>
            Вы заинтересованы в приобретении автомобиля бывшего в эксплуатации,
            но опасаетесь возникновения неисправностей? Мы готовы взять на себя
            все проблемы с ремонтом. Уже сегодня вы можете выбрать одну из наших
            гарантийных программ и быть уверенным в завтрашнем дне.
          </p>
          <p><strong>Мы хотим, чтобы Вы всегда оставались на ходу.</strong></p>
        </Block>
      </div>
    </>
  );
}
