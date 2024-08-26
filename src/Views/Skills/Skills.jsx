import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillsList from './SkillsList';

const Skills = () => {
  return (
    <section id='skills' className={styles.container}>
        <h3 className='sectionTitle'>Skills</h3>
        <div className={styles.skillsList}>
            <SkillsList src={checkMarkIcon} skill='HTML'/>
            <SkillsList src={checkMarkIcon} skill='CSS'/>
            <SkillsList src={checkMarkIcon} skill='Javascript'/>
        </div>
        <hr/>
        <div className={styles.skillsList}>
            <SkillsList src={checkMarkIcon} skill='React'/>
            <SkillsList src={checkMarkIcon} skill='Git'/>
            <SkillsList src={checkMarkIcon} skill='Jest'/>
            <SkillsList src={checkMarkIcon} skill='MUI'/>
            <SkillsList src={checkMarkIcon} skill='Figma'/>
        </div>
        <hr/>
        <div className={styles.skillsList}>
            <SkillsList src={checkMarkIcon} skill='Research'/>
            <SkillsList src={checkMarkIcon} skill='Wireframes'/>
            <SkillsList src={checkMarkIcon} skill='Prototypes'/>
        </div>
    </section>
  )
}

export default Skills;
