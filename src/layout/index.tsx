import React from 'react'
import styles from './index.module.scss'
import NavBar from '../components/NavBar'
import CurrentUser from '../components/CurrentUser'
import { useAppSelector } from '../api'
type LayoutProps = {
  children?: JSX.Element | JSX.Element[]
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const score = useAppSelector(state => state.score.value);
  const question = useAppSelector(state => state.question)
  return (
    <div className={styles.Layout}>
      <NavBar />
      <CurrentUser />
      <h2>Score: {score}</h2>
      <h2>Question {question.index + 1} out of {question.questions.length} </h2>
      <div className={styles.GameArea}>
      {children}
      </div>
    </div>
  )
}

export default Layout