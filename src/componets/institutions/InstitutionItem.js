import React from 'react';

const InstitutionItem = ({
  institution: { login, avatar_url, html_url, formName }
}) => {
  return (
    <div className='card text-center'>
      <img src={avatar_url} alt='' style={{ width: '80px' }} />
      <h3>{login}</h3>
      <formFill>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          {formName}
        </a>
      </formFill>
    </div>
  );
};

export default InstitutionItem;
