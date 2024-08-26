import styles from '../Projects/ProjectsStyles.module.css'
import MarioAndAdrian from '../../assets/Mario and Adrian b.jpg'
import ProjectCards from '../../common/ProjectCards'

const Projects = () => {
  return (
    <section id= 'projects' className={styles.container}>
      <h1 className='sectionTitle'>
        Projects
      </h1>
      <div className={styles.projectsContainer}>
        <ProjectCards src={MarioAndAdrian} link='https://github.com/sgodoys10/final-little-lemon-restaurant' 
        h3='Little Lemon'
        p='Restaurant app'
        />
      </div>
    </section>
  )
}

export default Projects
