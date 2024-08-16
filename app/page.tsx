"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Our AI-powered solution will transform your content production process. In seconds, you can easily produce interesting and high-quality copy. This application is ideal for writers, marketers, and bloggers since it simplifies your workflow and boosts your creativity.";
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [fullText]);

  const styles = {
    fullScreenContainer: {
      position: 'relative' as const,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
    },
    logo: {
      position: 'absolute' as const,
      top: 20,
      left: 20,
      zIndex: 10,
    },
    content: {
      position: 'absolute' as const,
      top: '50%',
      left: 60,
      transform: 'translateY(-50%)',
      color: 'white',
      textAlign: 'left' as 'left', // Specify the text alignment type
      zIndex: 10,
      maxWidth: 600,
    },
    title: {
      fontSize: 80,
      margin: 0,
      color: '#B660CD',
      fontWeight: 'bold',
    },
    description: {
      marginTop: 10,
      fontSize: 19,
      lineHeight: 1.5,
      fontWeight: 600,
      color: '#808080',
      whiteSpace: 'pre-wrap',
    },
    button: {
      marginTop: 25,
      padding: '15px 25px',
      backgroundColor: '#B660CD',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 16,
    },
  };

  // Handler to navigate to the dashboard
  const handleButtonClick = () => {
    router.push('/dashboard'); // Navigate to the dashboard page
  };

  return (
    <div style={styles.fullScreenContainer}>
      <Image
        src="/bg.png"
        alt="Background Image"
        fill
        style={{ objectFit: 'cover' }}
      />
      <div style={styles.logo}>
        <Image src="/logo.svg" alt="Logo" width={150} height={50} />
      </div>
      <div style={styles.content}>
        <h1 style={styles.title}>Gen-Content</h1>
        <p style={styles.description}>{text}</p>
        <button style={styles.button} onClick={handleButtonClick}>
          Get Started
        </button>
      </div>
    </div>
  );
}