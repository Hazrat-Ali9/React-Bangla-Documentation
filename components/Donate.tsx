import React from "react";
import styles from "./donate.module.css";
// Donate 
const Donate: React.FC = () => {
  return (
    <div className={styles.donateContainer}>
      <div className={styles.donateCard}>
        <h2 className={styles.donateTitle}>
          
        </h2>
        <p className={styles.donateText}>
          {" "}
          <strong className={styles.highlight}>
            
          </strong>{" "}
        
        </p>
        <p className={styles.donateText}>
          {" "}
          <strong className={styles.highlight}></strong>
          
        </p>
        <p className={styles.donateText}>
          🏦{" "}
          <strong>
          
          </strong>
          <br />
          হিসাব নাম: 
          <br />
          হিসাব নম্বর:{" "}
          <strong className={styles.greenText}></strong>
        </p>
        <p className={styles.donateText}>
          📲 <strong> (Personal):</strong> 
        </p>
        <p className={styles.donateText}>
          💰 <strong>:</strong>
          <br />
          🔸 BTC (BNB Smart Chain):{" "}
          <code></code>
          <br />
          🔸 Litecoin: <code></code>
          <br />
          🔸 Bitcoin: <code></code>
        </p>

        <a
          href="https://wa.me/01788262433"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.donateButton}
        >
          💬 WhatsApp এ যোগাযোগ করো
        </a>
      </div>
    </div>
  );
};

export default Donate;
