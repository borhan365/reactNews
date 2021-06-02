import Home from "./Home/Home";
import Single from './Single/Single'
import Category from './Category/Category'
import Author from './Author/Author'
import Page from './Page/Page'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AutoTop from "./Common/Effects/AutoTop";
// import ModalPopup from "./Common/Effects/ModalPopup";
// import BottomFixedAds from "./Common/Effects/BottomFixedAds";

function App() {

  return (
    <BrowserRouter> 
      <AutoTop />
      {/* <ModalPopup /> */}
      {/* <BottomFixedAds /> */}
      <scrollTo>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/category' component={Category} />
            <Route exact path='/single' component={Single} />
            <Route exact path='/author' component={Author} />
            <Route exact path='/page' component={Page} />
        </Switch>
      </scrollTo>
    </BrowserRouter>
  )
}

export default App;
