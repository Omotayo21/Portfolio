import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#05070A",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        fontFamily: "'Manrope', sans-serif",
      }}
    >
    
      <Link
        to="/web3"
        style={{
          color: "#1f2937",
          fontSize: "0.7rem",
          fontWeight: 400,
          textDecoration: "none",
          letterSpacing: "0.02em",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#6b7280")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#1f2937")}
      >
        Web3 Portfolio →
      </Link>
    </div>
  );
};

export default Footer;