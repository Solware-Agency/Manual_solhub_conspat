import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Demo() {
  const {siteConfig} = useDocusaurusContext();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  useEffect(() => {
    // Detectar el tema actual del DOM
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      const theme = htmlElement.getAttribute('data-theme');
      setIsDarkTheme(theme === 'dark');
    };
    
    // Verificar tema inicial
    checkTheme();
    
    // Observar cambios en el tema
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Colores dinámicos basados en el tema
  const themeColors = {
    background: isDarkTheme ? '#1e1e1e' : '#ffffff',
    text: isDarkTheme ? '#ffffff' : '#333333',
    textSecondary: isDarkTheme ? '#cccccc' : '#666666',
  };
  
  return (
    <Layout
      title="Demo de SolHub"
      description="Accede a la demo de SolHub">
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div style={{
          background: themeColors.background,
          borderRadius: '20px',
          boxShadow: isDarkTheme ? '0 20px 40px rgba(0, 0, 0, 0.3)' : '0 20px 40px rgba(0, 0, 0, 0.1)',
          padding: '40px',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          border: isDarkTheme ? '1px solid #404040' : 'none'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            margin: '0 auto 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/img/Logo_Morado_Solware.svg" 
              alt="Solware Logo" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
          
          <h1 style={{
            color: themeColors.text,
            fontSize: '2.5rem',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Demo de SolHub
          </h1>
          
          <p style={{
            color: themeColors.textSecondary,
            fontSize: '1.2rem',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Descubre todas las funcionalidades de SolHub para laboratorios patológicos
          </p>
          
          <a 
            href="https://panel.solware.agency/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              padding: '15px 40px',
              fontSize: '1.2rem',
              fontWeight: '600',
              borderRadius: '50px',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)',
              margin: '20px 10px'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 15px 30px rgba(102, 126, 234, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 20px rgba(102, 126, 234, 0.3)';
            }}
          >
            <span style={{fontSize: '1.5rem', marginRight: '10px'}}>💻</span>
            Acceder a la Demo
          </a>
          
          <br/>
          
          <a 
            href="/" 
            style={{
              background: isDarkTheme ? '#6c757d' : '#6c757d',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              fontSize: '1rem',
              fontWeight: '500',
              borderRadius: '50px',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              marginTop: '20px'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#5a6268';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#6c757d';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <span style={{fontSize: '1.5rem', marginRight: '10px'}}>←</span>
            Volver al Inicio
          </a>
        </div>
      </div>
    </Layout>
  );
}