import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Difference between Authorization and Authentication?</Accordion.Header>
          <Accordion.Body>
          <div>
                        <strong>Authentication:</strong> <br></br>
                      <ul>
                        <li>Authentication verifies who the user is.</li>
                        <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
                        <li>Authentication is the first step of a good identity and access management process.</li>
                        
                      </ul>
                      </div>
                      <div>
                        <strong>Authorization:</strong>  <br></br>
                      <ul>
                        <li>Authorization determines what resources a user can access.</li>
                        <li>Authorization works through settings that are implemented and maintained by the organization.</li>
                        <li>Authorization always takes place after authentication.</li>
                        
                      </ul>
                      </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
          <Accordion.Body>
        <p>
        There are many services which Firebase provides, Most useful of them are:
        <ul>
                        <li>Cloud Functions</li>
                        <li>Cloud Firestore</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Predictions</li>
                        <li>Cloud Messaging</li>
                        <li>Dynamic Links</li>
                        <li>Remote Config</li>
                        
                      </ul>
        </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #3</Accordion.Header>
          <Accordion.Body>
    
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
};

export default Blog;