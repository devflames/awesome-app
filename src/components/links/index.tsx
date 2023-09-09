import React from 'react';

interface Props {
  dark?: boolean;
  footer?: boolean;
}

const Links = ({ dark, footer }: Props) => {
  return (
    <div className={`links ${footer ? 'footer-links' : ''}`}>
      <div className="link" style={{ color: dark ? '#6851ff' : '#fff' }}>
        <a href="http://localhost:3000/" target="_blank" rel="noreferrer">
          Home
        </a>
      </div>
      <div className="link-divider" style={{ backgroundColor: dark ? '#DDDBE0' : '#a270d3' }} />
      <div className="link" style={{ color: dark ? '#6851ff' : '#fff' }}>
        <a href="http://localhost:3000/" target="_blank" rel="noreferrer">
          Dashboard
        </a>
      </div>
      <div className="link-divider" style={{ backgroundColor: dark ? '#DDDBE0' : '#a270d3' }} />
      <div className="link" style={{ color: dark ? '#6851ff' : '#fff' }}>
        <a href="https://discord.gg/" target="_blank" rel="noreferrer">
          Discord
        </a>
      </div>
    </div>
  );
};

export default Links;
