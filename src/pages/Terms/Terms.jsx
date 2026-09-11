import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages.css'

const Terms = () => {
  return (
    <div className='page'>
      <h1>Terms of Service</h1>
      <p className='updated'>Last updated: 11 September 2026</p>
      <p>
        These Terms of Service ("Terms") govern your use of EasyTextShare. By accessing
        or using the service, you agree to be bound by these Terms. If you do not
        agree with any part of these Terms, please do not use the service.
      </p>

      <h2>1. Description of the service</h2>
      <p>
        EasyTextShare is a free online tool that allows users to share text by creating a
        code and to retrieve shared text by entering a code. The service is
        provided "as is" and may change, be suspended, or be discontinued at any
        time.
      </p>

      <h2>2. Using the service</h2>
      <ul>
        <li>You must be at least 13 years old to use EasyTextShare.</li>
        <li>You are responsible for choosing safe codes and for how you share them.</li>
        <li>You must not upload content that is illegal, offensive, or harmful.</li>
        <li>You must not attempt to disrupt, overburden, or interfere with the service.</li>
      </ul>

      <h2>3. Acceptable content</h2>
      <p>
        You agree not to share text that is unlawful, threatening, abusive,
        defamatory, obscene, or infringing on the rights of others. We reserve the
        right to remove content that violates these Terms without notice.
      </p>

      <h2>4. Your responsibilities</h2>
      <p>
        You are fully responsible for the text you share and for keeping your
        codes safe. Whoever has the code can read the text, so treat codes like
        private keys. We are not responsible for any loss caused by sharing a code
        with the wrong person.
      </p>

      <h2>5. Disclaimer of warranties</h2>
      <p>
        EasyTextShare is provided "as is" and "as available" without warranties of any
        kind, whether express or implied, including but not limited to
        merchantability and fitness for a particular purpose. We do not guarantee
        that the service will be uninterrupted, error-free, or secure.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, EasyTextShare and its operators shall
        not be liable for any indirect, incidental, special, consequential, or
        punitive damages, or for any loss of data or profits, arising out of or
        related to your use of the service.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        The EasyTextShare name, logo, design, and software are the property of their
        respective owners. You may not copy, modify, distribute, or reverse
        engineer any part of the service without permission.
      </p>

      <h2>8. Privacy</h2>
      <p>
        Your use of the service is also governed by our
        <Link to="/privacy-policy"> Privacy Policy</Link>. Please read it to
        understand how your information is handled.
      </p>

      <h2>9. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Updated Terms will be posted
        on this page with a new "Last updated" date. Your continued use of the
        service after changes means you accept the revised Terms.
      </p>

      <h2>10. Termination</h2>
      <p>
        We may suspend or terminate your access to the service at any time, with or
        without notice, if you violate these Terms or if we believe your use
        harms the service or other users.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These Terms are governed by and interpreted in accordance with the laws
        applicable to EasyTextShare's place of operation, without regard to conflict of
        law principles.
      </p>

      <h2>12. Contact</h2>
      <p>
        If you have any questions about these Terms, please contact us through the
        <Link to="/contact"> Contact page</Link>.
      </p>
    </div>
  )
}

export default Terms