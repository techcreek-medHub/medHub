import React from 'react'
import './styles/sass.scss'
const App = () => {
  return (
    <div className="about">
      <div className="overlay">
          <div className="center">
              <h1 className="medhub">About medhub</h1>
              <div className="text-content">
                Medhub is a software application  created for handling medical data of our users, and also helping hospitals in Emergency management.
                Medhub is divided into the user platform and Hospitals.
                Medhub is basically for <ul>
                  <li>Database Management</li>
                  <li>Hospital Mobility</li>
                  <li>Doctors Mobility</li>
                  <li>Emergency Management</li></ul>
                  <h3>How It Works</h3>
                  In order to handle the above listed tasks, Mehub follows an orderly mode of carring outs is functionalies; and this <br/> ranges from user input validation to the finall services.
                  To start with medhub, you are required to <a href="#singhUp"> Sign Up </a> 
                  or <a href="#singIn"> Sign In</a> for already existing users. <br/>
                  After registering the user is required to visit any of our partner hospitals for proper upload of medical records. <br/>
                  After this series of actions, you can then explore and enjoy our services.
                  Thanks for Choosing medHub. We'll keep bringing updates.
              </div>
          </div>
      </div>
    </div>
  )
}

export default App