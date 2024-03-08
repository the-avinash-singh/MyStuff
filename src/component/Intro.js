import React from 'react'

export default function Intro() {
  return (
    <div>
        <div className='p-5 rounded-4 bg-light shadow my-5 '>
       <h1 className='fs-2'>What do we provide here :</h1>
      <p className='mx-md-5 fs-5 text-md-center'>
      We here at Mystuffsafe provide you a personal space to write and express your personal thoughts and feelings like a digital diary or use it as an online short note keeper. Write whatever you desire with the assurance that it is accessible only by you.
      </p>
      </div>
      <div className='p-5 rounded-4 bg-white shadow my-5'>
      <h1 className='fs-2'>Where your data is kept :</h1>
      <p className="mx-md-5 fs-5 text-md-center">The data of Mystuffsafe data is kept on the secured cloud, allowing you to access your data from anywhere, anytime. The cloud is spread over the globe and the data is decentralized in order to keep your data safe even if a server is compromised. </p>
      </div>
      <div className='p-5 rounded-4 shadow my-5 bg-light'>
      <h1 className='fs-2'>How we keep your data secured :</h1>
      <p className="mx-md-5 fs-5 text-md-center">We here at Mystuffsafe assure you that the data you store here is going nowhere; the data can only be accessed if and only if the correct ID and password are entered.</p>
      <p className="mx-md-5 fs-5 text-md-center">Even your passwords are stored securely here with us using the latest salt, pepper, and hash technique to encrypt your password, ensuring that your account is secured.</p>
      </div>
      <div className='p-5 rounded-4 shadow my-5 bg-light'>
        <h1 className='fs-2'>Technical aspects :</h1>
        <p className="mx-md-5 fs-5">This site is built using ReactJS, Bootstrap, and NodeJS. This site is an example of a notes site out there, like Google Notes.</p>
        <p className="mx-md-5 fs-5">This site comprises of:</p>
        <ul className="mx-md-5 fs-5">
          <li><strong>MongoDB</strong> - This is used as the online database to store its data on the cloud.</li>
          <li><strong>Mongoose</strong> - This is used to embed the MongoDB and to connect to the MongoDB.</li>
          <li><strong>Nodemon</strong> - Used to run the backend and create a backend API server, receive and respond to requests, and reload the server every time changes occur or on saving the file.</li>
          <li><strong>Concurrently</strong> - To start both the React server and the backend server of Nodemon at the same time, saving us from the trouble of starting the servers separately.</li>
          <li><strong>JsonWebToken</strong> - This enables us to authenticate the user, enhance security, and avoid any kind of unauthorized access.</li>
          <li><strong>ExpressJS</strong> - This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.</li>
          <li><strong>React-router-dom</strong> - This package helps us to introduce a way to link and navigate to different pages without reloading.</li>
          <li><strong>Express-validator</strong> - express-validator is a set of Express.js middlewares that wraps the extensive collection of validators and sanitizers offered by validator.js. It allows you to combine them in many ways so that you can validate and sanitize your Express requests and offers tools to determine if the request is valid or not, which data was matched according to your validators, and so on.</li>
        </ul>
        </div>
    </div>
  )
}
