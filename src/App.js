import './App.css';
import React from "react";
import Top from './pages/Top';
import { GlobalStateProvider } from './components/providers/GlobalStateProvider'

function App() {
  return (
		<GlobalStateProvider>
			<div className="App">
				<Top/>
			</div>
		</GlobalStateProvider>
  );
}

export default App;
