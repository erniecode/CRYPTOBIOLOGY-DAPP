import '../styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Dapp from './react/Dapp';
import CollectionConfig from '../../../smart-contract/config/CollectionConfig';
import Home from './react/pages/Home';
import Navbar from './react/Navbar';
import Navbar2 from './react/Navbar2';

if (document.title === '') {
  document.title = CollectionConfig.tokenName;
}

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(
    <>
      <Router>
        <Navbar2 />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </>,
    document.getElementById('minting-dapp')
  );
});
