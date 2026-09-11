import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages.css'

const HowItWorks = () => {
  return (
    <div className='page'>
      <h1>How It Works</h1>
      <p className='page-subtitle'>Sharing text with EasyTextShare takes seconds. Here is a step-by-step guide.</p>

      <h2>Share text with a code</h2>
      <ol>
        <li>Open the <strong>Home</strong> page and click the <strong>Share text</strong> button.</li>
        <li>Type or paste the text you want to share into the text box. You can paste directly from your clipboard using the Paste button.</li>
        <li>Choose a code that you and the receiver will remember, for example <em>meeting</em> or <em>notes123</em>.</li>
        <li>Click <strong>Share</strong>. A success message will confirm your text has been shared.</li>
        <li>Tell your friend or colleague the code. That is all they need.</li>
      </ol>

      <h2>Find text using a code</h2>
      <ol>
        <li>Open the <strong>Home</strong> page and click the <strong>Find text</strong> button.</li>
        <li>Enter the code you received into the code box, or paste it from your clipboard with the Paste button.</li>
        <li>Click <strong>Find</strong>.</li>
        <li>The shared text appears in the text box automatically copied to your clipboard.</li>
      </ol>

      <h2>Tips for a smooth experience</h2>
      <ul>
        <li>Use a code that is easy to spell and hard to guess wrong, like <em>family</em> or <em>trip2025</em>.</li>
        <li>If you share something sensitive, tell the receiver to delete the text from their device afterwards.</li>
        <li>Codes are case-sensitive, so make sure you share the exact same code you created.</li>
        <li>Saved text remains available as long as it is stored on our servers, so you can retrieve it later with the same code.</li>
      </ul>

      <h2>Is EasyTextShare free?</h2>
      <p>
        Yes. Text sharing and finding are completely free for everyone. There are
        no accounts, no downloads, and no limits on how often you can use the
        service.
      </p>

      <h2>Need help?</h2>
      <p>
        Check out our <Link to="/faq">FAQ</Link> for answers to common questions, or
        visit the <Link to="/contact">Contact page</Link> to reach our team directly.
      </p>
    </div>
  )
}

export default HowItWorks