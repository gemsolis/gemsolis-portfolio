// import Navigation from './components/Nav/Navigation';
// import Main from './components/Main/Main';
// import Projects from './components/Projects/Projects'
// import CaseStudy from './components/CaseStudy/CaseStudy';
// import TechStack from './components/TechStack/TechStack';


import { Navigation, Main, Projects, CaseStudy, TechStack, Contacts} from './components'

import './App.css';



function App() {
  return (
    <div>
    <Navigation/>
    <Main/>
    <Projects/>
    <CaseStudy/>
    <TechStack/>
    <Contacts/>

    </div>

  );
}

export default App;
