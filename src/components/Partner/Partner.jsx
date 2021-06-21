import React from "react";

export default function Partner(props) {
  return (
    <div className="partner">
<<<<<<< HEAD
      <div className="partner_col-l">{props.partner.description()}</div>
=======
      {/* <div className="partner_col-l">{props.partner.description}</div> */}
>>>>>>> a4c62c790afcd65d755dab6184f511f69a6f1af8
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
<<<<<<< HEAD
          <p>Адреса дилерских центров:</p>
          <p>{props.partner.adress()}</p>
=======
          {/* <p>Адреса дилерских центров:</p> */}
          <p>{props.partner.adress}</p>
>>>>>>> a4c62c790afcd65d755dab6184f511f69a6f1af8
        </div>
      </div>
    </div>
  );
}
