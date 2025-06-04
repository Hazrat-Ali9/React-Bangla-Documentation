import React from "react";
import styles from "./donate.module.css";

const Donate: React.FC = () => {
  return (
    <div className={styles.donateContainer}>
      <div className={styles.donateCard}>
        <h2 className={styles.donateTitle}>
          ☕ আপনার একটু ছোট ডোনেশন দিয়ে অনেক কিছু সম্ভব!
        </h2>
        <p className={styles.donateText}>
          আমি React ডকুমেন্টেশন বাংলা ভাষায় অনুবাদ করতেছি বিগিনারদের জন্য।{" "}
          <strong className={styles.highlight}>
            আমি প্রতিনিয়ত ব্যবহারযোগ্য নতুন নতুন ফিচার ও কোড
          </strong>{" "}
          আপনাদের সাথে শেয়ার করি।
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
