import logo from './logo.svg';
import Posts from './components/posts';
import PostForm from './components/postform';
import Header from './components/Header';
import {Provider} from 'react-redux';
import Store from './Store';

function App() {


  return (

    
    <Provider store={Store}>

      <div className="App">

        {<Header/>}

        {<PostForm/>}

        <Posts/>

      </div>

    </Provider>

  );
}

export default App;
