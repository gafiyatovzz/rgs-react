import React from "react";
import Block from "../../components/Block/Block";
import ContentTitle from "../../components/Block/ContentTitle/ContentTitle";
import Name from "../../components/Block/Name/Name";
import PageBanner from "../../components/PageBanner/PageBanner";

import medal from "../../assets/svg/medal.svg";
import ContentLine from "../../components/ContentLine/ContentLine";
import about from "../../content/about.js";
import Advanatges from "../../components/Advanatges/Advanatges";

export default function About() {
  return (
    <>
      <PageBanner classes="about" />
      <div className="about page">
        <div className="container">
          <Block
            title="Об услуге"
            subtitle="Защита от незапланированных расходов
на ремонт вашего автомобиля"
          >
            <ContentTitle>
              <Name /> предлагает Вам гарантию на автомобили с пробегом
            </ContentTitle>

            <div className="about_content">
              <div className="content_col">
                <img src={medal} alt="" className="content_img" />
              </div>
              <div className="content_col">
                <p className="content_ph">
                  По условиям нашей гарантии, в случае возникновения
                  механических поломок или разрушений основных агрегатов вашего
                  автомобиля, мы обязуемся обеспечить его ремонт за счет
                  собственных средств компании. Вы будете защищены от крупных
                  финансовых потерь, а ваш автомобиль быстро вернется в строй.
                </p>
                <p className="content_special">
                  Все дальнейшие расходы по устранению неисправностей несет
                  владелец автомобиля. Ни одна из привычных программ страхования
                  не покрывает риски возникновения технических неполадок
                  автомобиля не связанных с дорожно-транспортными происшествиями
                  или внешними воздействиями.
                </p>
                <p className="content_ph">
                  Мы меняем представления о покупке автомобилей с пробегом.
                  <br />
                  Теперь надежность вашего автомобиля – наша работа. С гарантией
                  РосГарантСервис вы можете забыть о своих опасениях!
                </p>
              </div>
            </div>
          </Block>
        </div>

        <ContentLine content={about.contentLine} />

        <div className="container">
          <Advanatges advantages={about.advantages} />

          <ContentTitle>
            Гарантия <Name /> – это доступно
          </ContentTitle>
          <p className="content_ph">
            Мы предлагаем гарантийные программы на автомобили от 1998 года
            выпуска, с пробегом до 250 000 км. Наша гарантия покрывает ремонт
            таких агрегатов автомобиля как двигатель, кпп, акпп, вариатор,
            роботизированная кп, редукторы, приводы 4х4 и многие другие узлы.s
          </p>
        </div>
      </div>
    </>
  );
}
