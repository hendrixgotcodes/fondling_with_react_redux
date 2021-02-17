import logo from './logo.svg';
import Posts from './components/posts';
import PostForm from './components/postform';
import Header from './components/Header';


function App() {
  return (
    <div className="App">

      {<Header/>}

      {<PostForm/>}

      <Posts/>
      
    </div>
  );
}

export default App;
