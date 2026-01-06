"use client";

import React, { useState, CSSProperties } from 'react';

export default function DeliveryDashboard() {
  const [isOnline, setIsOnline] = useState(true);

  // FIX: Explicitly tell TypeScript this contains valid CSS Properties
  const styles: { [key: string]: CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      backgroundColor: '#f4f6f8',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      padding: '20px',
    },
    mobileWrapper: {
      width: '100%',
      maxWidth: '500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '25px',
    },
    logo: {
      width: '80px',
      height: 'auto',
      marginBottom: '10px',
    },
    title: {
      color: '#FF6600', // MishTee Orange
      fontSize: '22px',
      fontWeight: '700',
      margin: '0',
      textAlign: 'center',
    },
    statusBadge: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: '8px 16px',
      borderRadius: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      marginBottom: '30px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#333',
    },
    pulseDot: {
      width: '10px',
      height: '10px',
      backgroundColor: '#28a745',
      borderRadius: '50%',
      marginRight: '10px',
      // We use a type assertion here because 'animation' is valid in CSS but sometimes strict in React TS
      animation: 'pulse 1.5s infinite',
    },
    card: {
      backgroundColor: '#ffffff',
      width: '100%',
      padding: '25px',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      marginBottom: '25px',
      boxSizing: 'border-box',
    },
    cardLabel: {
      color: '#888',
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '8px',
      fontWeight: 'bold',
    },
    cardValue: {
      color: '#1a1a1a',
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '5px',
    },
    subText: {
      color: '#555',
      fontSize: '14px',
    },
    button: {
      backgroundColor: '#FF6600',
      color: '#ffffff',
      width: '100%',
      padding: '18px',
      border: 'none',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0 4px 15px rgba(255, 102, 0, 0.3)',
      transition: 'transform 0.1s ease',
    },
  };

  return (
    <div style={styles.container}>
      {/* Injecting Keyframes for the Pulse Animation */}
      <style jsx global>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(40, 167, 69, 0); }
          100% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0); }
        }
      `}</style>

      <div style={styles.mobileWrapper}>
        
        {/* Header Section */}
        <header style={styles.header}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
            alt="mishTee Logo" 
            style={styles.logo} 
          />
          <h1 style={styles.title}>mishTee Delivery Mitra</h1>
        </header>

        {/* Status Section */}
        <div style={styles.statusBadge}>
          <div style={styles.pulseDot}></div>
          <span>{isOnline ? "Agent Online" : "Agent Offline"}</span>
        </div>

        {/* Task Card */}
        <div style={styles.card}>
          <div style={styles.cardLabel}>Current Task</div>
          <div style={styles.cardValue}>Deliver to: Arjun Mehta</div>
          <div style={styles.subText}>Order #8821 • 2.4 km away</div>
        </div>

        {/* Action Button */}
        <button 
          style={styles.button}
          onClick={() => alert("Navigation Started!")}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Start Navigation
        </button>

      </div>
    </div>
  );
}
