// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
   
    <div className="flex h-screen w-full">
    <div className="flex-1 bg-hero bg-cover bg-center bg-no-repeat">
    <div className="box">
      <div className="box-content">
        <a href="https://entra.microsoft.com" target="_blank" rel="noopener noreferrer">
          <img src="/ms-symbollockup_signin_dark.svg" alt="Microsoft Entra ID" />
        </a>
      </div>
    </div>
    </div>
  </div>  
  );
}
