import React, { Component } from 'react';

export class Navbar extends Component {
  static defaultProps = {
    title: 'bureaucratMe',
    icon: 'fas fa-user-tie'
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i class={this.props.icon}></i> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
