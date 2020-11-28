import React from 'react';
import './App.scss';
import Home from './Pages/Home/index';
import Cards from './Pages/Cards/index';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';
import ProjectsLayout from './components/Layouts/ProjectsLayout';



function App() {
  return (
    <>
    <div className="App">  
      
      <Switch>
        <Route exact path='/' render={()=>(
          <MainLayout >
            <Home />
          </MainLayout>
        )}/>
        <Route path='/projects' render={() => (
          <ProjectsLayout>
            <Cards />
        </ProjectsLayout>
        )} />
      </Switch>
  
    </div>
    </>
  );
}

export default App;
