import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'
import RobotEyeTracking from './Robot'

const FeatureList = [
  {
    title: 'Plataforma Web',
    image: '/img/mockup_2.webp',
    robot: null,
    description: <>Accede desde cualquier dispositivo con conexión a internet. Sin necesidad de 
    instalar ningún APK.</>,
  },
  {
    title: 'Asistente IA',
    image: null,
    robot: <RobotEyeTracking className={styles.featureSvg} />,
    description: (
      <>
        Nuestro asistente con Inteligencia Artificial te guiara paso a paso 
        para ayudarte a gestionar tu información financiera sin complicaciones.
      </>
    ),
  },
  {
    title: 'Control Total de Ingresos',
    image: '/img/mockup_1.webp',
    robot: null,
    description: (
      <>
        Registra y monitorea todos los ingresos de tu laboratorio en tiempo real. Obtén reportes detallados y análisis
        financieros completos.
      </>
    ),
  },
]

function Feature({ image, title, description, robot }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {robot
          ? robot
          : image
          ? <img src={image} className={styles.featureSvg} alt={title} />
          : null}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((item, idx) => (
            <Feature key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}