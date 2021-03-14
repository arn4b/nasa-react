import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'

const req = new XMLHttpRequest();
const API_URL = "https://api.nasa.gov/planetary/apod?api_key=";
const API_KEY = "d9g42caanvvv7mVg5RD1RhqJQslpY6bOsfBtfKku";

req.open("GET", API_URL + API_KEY);
req.send();


req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})



function App() {

  const [eventData, setEventData] = useState([])

  const fetchPics = async () => {
    const res = await fetch(API_URL)
    const {events} = await res.json()

    setEventData(events)
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Date: <span id="date"></span></h2>
      <img id="pic"/>
    </div>
  );
}

export default App;
