import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages.css'

const About = () => {
  return (
    <div className='page'>
      <h1>About EasyTextShare</h1>
      <p className='page-subtitle'>Share important text safely and simply using a short code.</p>

      <h2>What is EasyTextShare?</h2>
      <p>
        EasyTextShare is a free online tool that lets you share text with anyone using a
        simple code instead of long links or attachments. You write or paste your
        text, choose your own code, and share it. The person on the other end
        enters the same code and instantly receives the text you shared.
      </p>

      <h2>Why we built EasyTextShare</h2>
      <p>
        Passing information between devices, friends, and colleagues is something
        everyone does every day. Email attachments are heavy, messaging apps can
        compress or alter your formatting, and long links are hard to read aloud or
        remember. EasyTextShare was built to give people a quick, private, and
        hassle-free way to move text from one place to another using nothing more
        than a memorable code.
      </p>

      <h2>How EasyTextShare works</h2>
      <p>
        The service is built around two simple actions:
      </p>
      <ul>
        <li><strong>Share text</strong> – Enter the text you want to share, create a
          code of your choice, and click Share. Your text is stored securely and is
          ready for anyone who has the code.</li>
        <li><strong>Find text</strong> – Enter the code you received, click Find,
          and the matching text appears instantly so you can read or copy it.</li>
      </ul>

      <h2>Our mission</h2>
      <p>
        Our mission is to make sharing text as easy as possible, for everyone.
        Whether you are sending a meeting note, a homework answer, a password, or a
        shopping list, EasyTextShare gives you a reliable way to pass information across
        quickly and confidently. The tool is free to use, works on any device with
        a browser, and never requires an account.
      </p>

      <h2>Who uses EasyTextShare</h2>
      <ul>
        <li><strong>Students</strong> – sharing study notes and project ideas.</li>
        <li><strong>Teachers and tutors</strong> – passing lesson summaries to their class.</li>
        <li><strong>Professionals</strong> – moving snippets of text between devices at work.</li>
        <li><strong>Anyone</strong> – who wants a fast way to pass a message to a friend.</li>
      </ul>

      <h2>Contact us</h2>
      <p>
        We love hearing from our users. If you have questions, feedback, or
        suggestions, please visit our <Link to="/contact">Contact page</Link> and get in
        touch. We read every message and use your input to make EasyTextShare better.
      </p>
    </div>
  )
}

export default About