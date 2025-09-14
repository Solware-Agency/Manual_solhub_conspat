import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="hero hero--primary">
      <div className="container" style={{textAlign: 'center'}}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="buttons">
          <Link
            className="button button--secondary button--lg"
            to="/docs/Inicio">
            Acceder al Manual 📖
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ28TbL6x8Jj7yLpzgpH2OQ1MV5t5zdvwYRbjCTVKTjj-pNNzSSZ3mGSpguP7Sv4AksuyRdav2bJ"
            target="_blank"
            rel="noopener noreferrer">
            Programa tu Cita 📅
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/demo">
            Visualizar Demo 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

