import * as React from 'react';

declare type NavBarProps = {
  isAuthenticated: boolean,
  setIsAuthenticated: (value: boolean) => void
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
            props.setIsAuthenticated(false)
          }}>Log Off</button>
          :
          <button className="simple" onClick={() => {
            props.setIsAuthenticated(true)
          }}>Log In</button>
      }
    </div>
  </div>
}

export {NavBar}