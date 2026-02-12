import React from "react";
import "./Ticker.css";

export default function Ticker() {
  const messages = [
    "😋 Delicious Dates Starting at ₹149/- 😋",
    "🎉 Sweet, Fresh Dates – Special Offers Available! 🎉",
    "🤤 Naturally Tasty Dates with Limited-Time Deals! 🤤",
    "😊 Fresh & Juicy Dates – Don’t Miss Our Special Offers! 😊",
    "🌟 Premium Quality Dates with Amazing Offers Inside! 🌟",
    "🥜 Nutraj Anmol Jumbo Nuts - Extra 10% OFF! 🥜"
  ];

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {/* Repeat the content twice for a seamless infinite loop */}
        <div className="ticker__item-container">
          {messages.map((msg, index) => (
            <span key={index} className="ticker__item">{msg}</span>
          ))}
        </div>
        <div className="ticker__item-container" aria-hidden="true">
          {messages.map((msg, index) => (
            <span key={`dup-${index}`} className="ticker__item">{msg}</span>
          ))}
        </div>
      </div>
    </div>
  );
}