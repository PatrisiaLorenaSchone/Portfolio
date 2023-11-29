import React from 'react'
import errorRobot from "../assets/errorRobot.png"
import { ThemeContext } from '../App'

function ErrorPage() {
  let {lightMode} = React.useContext(ThemeContext)
  return (
    <div className={lightMode ? 'error-page' : 'error-page dark-error-page'}>
      <img height={300} src={errorRobot} alt="error stiker"/>
      <h1>We are sorry but we could not find the page you are looking for...</h1>
      <ul className='error-list'>
      <h3>There are many possible causes for a page not to exist. Some of the common ones are:</h3>
        <li>🚧 The page was deleted by the owner or administrator of the website.</li>
        <li>🚧 The page was moved to a different location or renamed without updating the links to it.</li>
        <li>🚧 The page was never created in the first place or is still under construction.</li>
        <li>🚧 The page is temporarily unavailable due to maintenance or technical issues.</li>
        <li>🚧 The page is blocked by your network or firewall settings.</li>
        <li>🚧 The page is restricted by the website's privacy or security policies.</li>
      </ul>
      <ul className='solution-list'>
      <h3>Here are some sugestions for you:</h3>
        <li>💡<span>Check the URL of the page.</span> Sometimes, a simple typo or spelling mistake can cause a page not to load. Make sure the correct address is entered and try again.</li>
        <li>💡<span>Refresh the page.</span> Sometimes, a temporary glitch or network issue can prevent a page from loading. Try reloading the page by pressing F5 or clicking on the refresh button on the browser.</li>
        <li>💡<a href="/">Go back to the previous page.</a> Sometimes, a link might be broken or outdated. Try going back to the page where the link was found and see if there is an updated or alternative link to the same information.</li>
        <li>💡<span>Use a search engine.</span> Sometimes, a page might be indexed by a search engine even if it doesn't exist anymore. Try searching for keywords related to the topic of the page and see if other sources of information can be found.</li>
        <li>💡 Please <a href="mailto:patriciaschone23@gmail.com" className="mail-svg">contact us</a> for further assistance</li>
      </ul>
    </div>
  )
}

export default ErrorPage
