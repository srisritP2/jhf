import React from 'react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick, className = '' }) => {
  // Use react-router-dom's Link, but keep this component generic for easier testing and future extension
  // The actual Link import will be injected where used
  return (
    <a href={to} onClick={onClick} className={className} tabIndex={0}>
      {children}
    </a>
  );
};

export default NavLink;
