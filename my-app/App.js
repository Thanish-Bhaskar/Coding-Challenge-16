// U08201790
import React from 'react';
import Gallery from './Gallery';
import Header from '../Header';

const teamMembers = [
  { id: 1, name: 'Johnny', role: 'Developer', photo: '"C:\Users\thani\Downloads\alice.webp"' },
  { id: 2, name: 'Bob', role: 'Designer', photo: '"C:\Users\thani\Downloads\bob stock.jpg"' },

];

function App() {
  return (
    <div className="App">
      <Header title="Team Gallery" />
      <Gallery teamMembers={teamMembers} />
    </div>
  );
}

export default App;
