import React, { Component } from 'react';

class InstitutionItem extends Component {
  render() {
    const { login, avatar_url, html_url, formToFill } = this.props.institution;

    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <formFill>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            {formToFill}
          </a>
        </formFill>
      </div>
    );
  }
}

export default InstitutionItem;
