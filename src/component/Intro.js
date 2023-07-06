import React from 'react'

export default function Intro() {
  return (
    <div>
        <div className='p-4 rounded shadow my-5'>
       <h1>What do we provide here</h1>
      <p className='mx-5 fs-4 text-center'>
        We here at Mystuffsafe.com provide you a personal space to write and express your personal thoughts and feelings like a digital diary or use it as a online short note keeper. Write what ever you desire with the assurance that it is accessable only by you.
      </p>
      </div>
      <div className='p-4 rounded shadow my-5 '>
      <h1>Where your data is kept</h1>
      <p className="mx-5 fs-4 text-center">The data of Mystuffsafe.com and your data is kept on the secured cloud allowing you to access your data from any where any time. The cloud is spred over the globe and the data is decentralized in order to keep your data safe even if a server is compromised.  </p>
      </div>
      <div className='p-4 rounded shadow my-5 '>
      <h1>How we keep your data secured</h1>
      <p className="mx-5 fs-4 text-center">We here at Mysuffsafe.com assure you that the data you store here is going no where the data can only be accessed if and only if the correct id and password are entered.</p>
      <p className="mx-5 fs-4 text-center">Even your passwords are stored securly here with us using the latest salt, pepper and hash technique to encrypt your password ensuring that your account is secured</p>
      </div>
      <div className='p-4 rounded shadow my-5 '>
      <h1>Technical aspects</h1>
      <p className="mx-5 fs-4 text-left">This site is built using ReactJS Bootstrap NodeJS this site is a example of notes site out there like google notes.</p>
      <p className="mx-5 fs-4 ">This site comprises of-</p>
      <ul className="mx-5 fs-4">
      <li><strong>MongoDB-</strong>This is used as the Online data base to store its data on the cloud.</li>
      <li><strong>Mongoose-</strong>This is used to embed the MongoDB and to connect to the mongodb.</li>
      <li><strong>Nodemon-</strong>Used to run the backend and create a backend api server and recive and respond to requests and to reload the server every time changes occure or on saving the file.</li>
      <li><strong>Concurrently-</strong>To start both the react server and the backend server of nodemon on sametime saving us fron the trouble fo starting the server saperatly</li>
      <li><strong>JsonWebToken-</strong>This enabled us to authenticate the user and enhance security and avoid any kind of unauthorised access.</li>
      <li><strong>Express-</strong>This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.</li>
      <li><strong>React-router-dom-</strong>This packege helpes us to introduce a way to link and nevigate to different pages whith ou reloading.</li>
      <li><strong>Express-validator-</strong>express-validator is a set of express.js middlewares that wraps the extensive collection of validators and sanitizers offered by validator.js.

It allows you to combine them in many ways so that you can validate and sanitize your express requests, and offers tools to determine if the request is valid or not, which data was matched according to your validators, and so on.</li>
      </ul>
      </div>
    </div>
  )
}
