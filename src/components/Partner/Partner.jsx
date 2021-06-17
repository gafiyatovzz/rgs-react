import React from "react";

export default function Partner(props) {
  return (
    <div className="partner">
      <div className="partner_col-l">{props.partner.description}</div>
      <div className="partner_col-r">
        {props.partner.logo ? (
          <>
            <div className="partner_logo">
              <img src={props.partner.logo} alt="partner" />
            </div>
          </>
        ) : (
          ""
        )}
        <div className="partner_adress">
          <p>Адреса дилерских центров:</p>
          <p>{props.partner.adress}</p>
        </div>
      </div>
    </div>
  );
}
