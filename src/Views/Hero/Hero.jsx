import styles from './HeroStyles.module.css'
import heroImg from '../../assets/samuAI2.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from  '../../assets/Samuel Godoy Sarassa CV2.pdf'
import { useTheme } from '../../common/ThemeContext'

const Hero = () => {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero} 
        src={heroImg} 
        alt='Profile picture of Samuel Godoy'
        />
        <img 
        className={styles.colorMode}
        src={themeIcon}
        alt='Color mode icon'
        onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
            Samuel 
            <br />
            Godoy
        </h1>
        <h2>
            Frontend Developer
        </h2>
        <span>
            <a href='https://www.linkedin.com/in/samuel-godoy-sarassa/' target='_blank'>
                <img src={linkedinIcon} alt='LinkedIn Icon' />
            </a>
            <a href='https://github.com/sgodoys10' target='_blank'>
                <img src={githubIcon} alt='Github Icon' />
            </a>
        </span>
        <p className={styles.description}>
        I have over five years of teaching experience at UC San Diego and growing expertise in web development and UX design. With a Meta Front-End Developer Professional Certificate and hands-on UX design experience, I'm ready to contribute to diverse professional settings.
        </p>
        <a href={CV} download>
            <button className='hover'>CV/Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
