import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages.css'

const FAQ = () => {
  return (
    <div className='page'>
      <h1>Frequently Asked Questions</h1>
      <p className='page-subtitle'>Everything you need to know about using EasyTextShare.</p>

      <div className='faq-details'>
        <details>
          <summary>Is EasyTextShare free to use?</summary>
          <p>Yes. EasyTextShare is completely free. There are no hidden charges, no paid plans, and no account required.</p>
        </details>
      </div>

      <div className='faq-details'>
        <details>
          <summary>Do I need to create an account?</summary>
          <p>No. You can share and find text right away without signing up or providing any personal information.</p>
        </details>
      </div>

      <div className='faq-details'>
        <details>
          <summary>How long is my shared text stored?</summary>
          <p>Shared text remains stored on our servers so it can be retrieved with the correct code. There is no automatic expiry unless required by our policies.</p>
        </details>
      </div>

      <div className='faq-details'>
        <details>
          <summary>Is my text private?</summary>
          <p>Anyone who knows your code can view the text, so treat the code like a key. We do not read, sell, or share your text with third parties.</p>
        </details>
      </div>

      <div className='faq-details'>
        <details>
          <summary>Can I choose my own code?</summary>
          <p>Yes. You create the code yourself when you share text. Choose something memorable that you and the receiver will not mix up.</p>
        </details>
      </div>

      <div className='faq-details'>
        <details>
          <summary>What happens if I forget my code?</summary>
          <p>If you forget the code, the text cannot be found again. That is why we recommend choosing a code you will remember or saving it in a safe place.</p>
        </details>
      </div>

      <div className='faq-details'>
        <details>
          <summary>Is there a limit on how much text I can share?</summary>
          <p>There is no set limit for regular use. Extremely large amounts of text are handled best when broken into smaller, well-organised parts.</p>
        </details>
      </div>

      <div className='faq-details'>
        <details>
          <summary>Can I edit or delete shared text?</summary>
          <p>Sharing again with the same code replaces the previous text. None of that is possible, since the focus is on fast one-time sharing.</p>
        </details>
      </div>

      <div className='faq-details'>
        <details>
          <summary>Which devices and browsers are supported?</summary>
          <p>EasyTextShare works in any modern browser on phones, tablets, and computers. No app installation is needed.</p>
        </details>
      </div>

      <h2>Still have questions?</h2>
      <p>
        If you cannot find the answer you are looking for, please reach out through
        the <Link to="/contact">Contact page</Link> and we will get back to you as soon
        as possible.
      </p>
    </div>
  )
}

export default FAQ