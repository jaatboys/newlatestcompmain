import './App.css';
import { Route, Routes } from 'react-router-dom';
import QuestionSelect from './Components/Quiz/QuestionSelect';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import MyExams from './Components/Quiz/Exam/MyExams';
import ExamInstru from './Components/Quiz/Exam/ExamInstru';
import QuestionForm from './Components/Quiz/QuestionForm';
import QuizCatagory from './Components/Theory/Quiz_Category/QuizCatagory';
import { Question } from './Components/Theory/QuestionsPage/Question';
import MainFooter from './Components/Footer/MainFooter';
import PythonR from './Components/Tutorials/Theory/PythonTheory/PythonR';
import PythonVariables from './Components/Tutorials/Theory/PythonTheory/PythonList/PythonVariables';
import CSharpR from './Components/Tutorials/Theory/CSharpTheory/CSharpR';
import PhpR from './Components/Tutorials/Theory/PhpTheory/PhpR';
import CppR from './Components/Tutorials/Theory/CppTheory/CppR';
import CR from './Components/Tutorials/Theory/CTheory/CR';
import JavaScriptR from './Components/Tutorials/Theory/JavascriptTheory/JavaScriptR';
import JavaR from './Components/Tutorials/Theory/JavaTheory/JavaR';




import CourseArticleHeader from './Components/Header/CourseArticleHeader';
import NotFound from './Components/Error';
import HomePageMain from './Components/Home/HomePageMain';
import HomePageHeader from './Components/Header/HomePageHeader';
import './prism-ally-green.css';
import JavaVsPythonRoute from './Components/Tutorials/Theory/JavaVsPythonTheory/JavaVsPythonRoute';
import JavaVsCsharpRoute from './Components/Tutorials/Theory/JavaVsCsharpTheory/JavaVsCsharpRoute';
import Compiler from '../src/Components/Compiler'
import AboutUs from './Components/Footer/AboutUs'
import Disclaimer from './Components/Footer/Disclaimer'
import PrivacyPolicy from './Components/Footer/Privacy'
import TermsAndConditions from './Components/Footer/Terms'


function App() {
  return (
    <div className='text-white'>

      <HomePageHeader />

      <Routes>
        <Route path='/' element={<HomePageMain />} />
        <Route path='/programming-language-to-learn' element={<Home />} />
        <Route path='/quiz' element={<QuestionSelect />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/myexams' element={<MyExams />} />
        <Route path='/examinstru' element={<ExamInstru />} />
        <Route path='/qform' element={<QuestionForm />} />
        <Route path='/qc' element={<QuizCatagory />} />
        <Route path='/qa' element={<Question />} />
        <Route path='/compiler/:id' element={<Compiler/>} />
     
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <CR />
      <CppR />
      <CSharpR />
      <JavaScriptR />
      <JavaR />
      <PhpR />
      <PythonR />
      <JavaVsPythonRoute />
      <JavaVsCsharpRoute />

<MainFooter/>

    </div>
  );
}

export default App;
