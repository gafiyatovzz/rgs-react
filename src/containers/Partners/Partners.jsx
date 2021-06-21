import React from 'react';
import Block from '../../components/Block/Block';
import PageBanner from '../../components/PageBanner/PageBanner';
import Partner from '../../components/Partner/Partner';
import partners from '../../content/partners.js';

export default function Partners() {
  return (
    <>
      <PageBanner classes='partners' />
      <div className='partners'>
        <div className='container'>
          <Block title='Наши партнёры'>
            {partners.map((partner, key) => {
              return <Partner partner={partner} key={key} />;
            })}
          </Block>
        </div>
      </div>
    </>
  );
}
