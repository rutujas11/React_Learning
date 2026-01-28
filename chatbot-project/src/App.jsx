import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'

function App(){ 
          const [chatMessages, setChatMessages] = useState([]);
          //const chatMessages = array[0];
          //const setChatMessages = array[1];
          //shortcut for above 2 lines ( Array Destructuring) 
          //const [chatMessages, setChatMessages] = array;
          //we can also directly replace const array by const [chatMessages, setChatMessages] in the first place only
        return (
          
          <div className="app-container">
            {chatMessages.length === 0 && (
              <p className="welcome-msg">
                Welcome to the chatbot project! Send a message using the textbox below.
              </p>
            )}
            
            <ChatMessages
              chatMessages={chatMessages}
            />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
