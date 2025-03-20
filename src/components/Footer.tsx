import React, { useEffect } from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  useEffect(() => {
    const footerReveal = document.querySelector('footer .reveal');
    if (footerReveal) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(footerReveal);
      return () => observer.disconnect();
    }
  }, []);
  
  return (
    <footer style={{ 
      borderTop: '1px solid #e9ecef',
      padding: '3rem 0',
      marginTop: '4rem',
      textAlign: 'center'
    }}>
      <div className="reveal fade-bottom">
        <p>&copy; {currentYear} All rights reserved.</p>
        <div style={{ marginTop: '1.5rem' }}>
          <a href="https://github.com/Balionelis" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1.5rem' }}>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;