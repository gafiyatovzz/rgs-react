import React from "react";

export default function Contacts(props) {
  const client = props.client;
  return (
    <div className="contacts">
      <a href={client.phone.link}>{client.phone.tel}</a>
    </div>
  );
}
