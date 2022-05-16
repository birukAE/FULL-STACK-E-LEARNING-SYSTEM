import React from 'react';
import GlobalStyle from './gstyles';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import TopContainer from './home/navbar/navbar';
import Homepage from './pages/homepage/homepages'
import { Footer } from './pages/footer/footer';
import  Services  from './pages/services/services';

import Regbutton from './pages/registration/reg';
import Memberreg from './pages/registration/stu';
import Companyreg from './pages/registration/tech';
import Registration from './pages/registration/other'
import Login from './pages/login/login'
import Melogin from './pages/login/loginme'
import Admin from './pages/login/logadmin';
import Teacherreg from './pages/registration/tech';
import Courses from './pages/functions/courses';
import Tech from './pages/functions/techn';
import Comp from './pages/functions/comp';
import Mote from './pages/functions/motivations';
import Post from './pages/post/post';
import Subject from './pages/functions/subjects';
import Unit1mat from './pages/functions/units/grade 7/unit1mat'
function App() {
  return (
  <Router>
       <GlobalStyle />
  <TopContainer />

  <Switch>
  <Route path='/' exact component={Homepage} />
  </Switch>
  <Switch>
  <Route path='/services' exact component={Services} />
  </Switch>
  
  <Switch>
  <Route path='/log in' exact component={Regbutton} />
  </Switch>
  <Switch>
  <Route path='/other' exact component={Registration} />
  </Switch>
  <Switch>
  <Route path='/stu' exact component={Melogin}  />
  </Switch>
  
  <Switch>
  <Route path='/tech' exact component={Login} />
  </Switch>
  <Switch>
  <Route path='/techreg' exact component={Teacherreg}/>
  </Switch>
  <Switch>
  <Route path='/logadmin' exact component={Admin} />
  </Switch>
  <Switch>
  <Route path='/memberreg' exact component={Memberreg}  />
  </Switch>
  <Switch>
  <Route path='/courses' exact component={Courses}  />
  </Switch>
  <Switch>
  <Route path='/technic' exact component={Tech}  />
  </Switch>
  <Switch>
  <Route path='/comp' exact component={Comp}  />
  </Switch>
  <Switch>
  <Route path='/mote' exact component={Mote}  />
  </Switch>
  <Switch>
  <Route path='/logadmin' exact component={Admin}  />
  </Switch>
  <Switch>
  <Route path='/adminpost' exact component={Post}  />
  </Switch>
  <Switch>
  <Route path='/subs' exact component={Subject}  />
  </Switch>
  <Switch>
  <Route path='/unit1mat' exact component={Unit1mat}  />
  </Switch>
  <Footer />

    </Router>

   ) }

export default App;
