import './App.css';
import { BrowserRouter as Router ,Route , Switch } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import Blog from './components/blogs/Blog';
import AddBlog from './components/blogs/AddBlog';
import BlogDetail from './components/blogs/BlogDetail';
import "bootstrap/dist/css/bootstrap.min.css";
// import Login from './components/auth/login';


function App() {
  return (
    <Router>
      <Navbar/>
      
      <div className="container-fluid">
        <div className="container">
        <Switch>
          
          <Route exact path={["/" , "/blogs"]} component={Blog}/>
          <Route exact path="/add" component={AddBlog}/>
          <Route path="/blogs/:id" component={BlogDetail}/>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
