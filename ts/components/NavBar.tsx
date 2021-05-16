import * as React from 'react';

declare type NavBarProps = {
  isAuthenticated: boolean,
  doLogin: (value: boolean) => void
}

const NavBar: React.FC<NavBarProps> = (props) => {

  const style: React.CSSProperties = {
    padding: '10px',
    margin: 0,
    backgroundColor: 'black',
  }

  return <div id="navbar" style={style}>
    navbar
    <div className="pull_right">
      {
        props.isAuthenticated ?
          <button className="simple" onClick={() => {
            props.doLogin(false)
          }}>Log Out</button>
          :
          <button className="simple" onClick={() => {
            props.doLogin(true)
          }}>Log In</button>
      }
    </div>
  </div>
}

export {NavBar}