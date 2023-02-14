
// css file
import  "../src/style/App.css"
import "../src/style/list.css"
import "../src/style/home.css"
import "../src/style/blog.css"
// import "../src/style/contact.css"
import "../src/style/portfolios.css"
import "../src/style/poster.css"

// jsx file
import {List} from './jsx/list';
import {Home} from './jsx/home'
import { About } from './jsx/about';
import {Blog} from './jsx/blog';
// import {Contact} from './jsx/contact'
import {Portfolios} from './jsx/portfolios'
import {Poster} from './jsx/poster'

function App() {
  return (
   <>

    <List />
    <Home />
    <About />
    <Blog />
    {/* <Contact /> */}

    <Portfolios />
    <Poster />
   </>
   );
}

export default App;
