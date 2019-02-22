import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/app.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import contacts from './data/contacts.json'

const handleContactClick = (index) => {
  curentlySelected = index; 
  render();
}

const htmlArr = []
contacts.forEach((contact, index) => {
  htmlArr.push(<div onClick={() => handleContactClick(index)} key={index} className="contact" data-id="id">
    <span className="avatar small">&#9787;</span>
    <span className="title">{contact.firstName} {contact.lastName}</span>
  </div>)
})

let curentlySelected = 0

const Header = () => (
  <div className="container">
    <header>&#9993; Contact Book</header>
    <div id="book">
      <div id="list">
        <h1>Contacts</h1>
        <div className="content"></div>
        <Contacts />
      </div>
      <Details index={curentlySelected}/>
    </div>
    <Footer />
  </div>
)

const Contacts = () => (
  htmlArr
)

const Details = (props) => (
  <div id="details">
    <h1>Details</h1>
    <div className="content">
      <div className="info">
        <div className="col">
          <span className="avatar">&#9787;</span>
        </div>
        <div className="col">
          <span className="name">{contacts[props.index].firstName}</span>
          <span className="name">{contacts[props.index].lastName}</span>
        </div>
      </div>
      <div className="info">
        <span className="info-line">&phone; {contacts[props.index].phone}</span>
        <span className="info-line">&#9993; {contacts[props.index].email}</span>
      </div>
    </div>
  </div>
)

const Footer = () => (
  <footer>Contact Book SPA &copy; 2017</footer>     
)

const render = () => ReactDOM.render(
  <Header />, document.getElementById('root')
)

render ()

serviceWorker.unregister();
