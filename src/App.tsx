import { Chat } from './components/Chat';
import { userData } from "./components/Chat/data";
import './App.scss';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Chat 
          messages={userData[0].messages}
          selectedUser={userData[0]}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
