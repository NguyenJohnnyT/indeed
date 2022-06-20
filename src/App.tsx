import React, { useEffect, useState, } from 'react'
import { Question, useGetRandomQuestion } from "./api";
import './styles/_global.scss';
import UserNameContextWrapper from './contexts/UserName';
import Layout from './layout';
import QuestionCard from './components/QuestionCard';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
const App: React.FC = () => {
  const [test, setTest] = useState<Question>()
  useEffect(() => setTest(useGetRandomQuestion()), [])

  return (
    <UserNameContextWrapper>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/play' element={test && <QuestionCard question={test} />} />
          <Route path='/highscores' />
          <Route path='*' element={<Home />} />
        </Routes>
      </Layout>
    </UserNameContextWrapper>
  );
}

export default App