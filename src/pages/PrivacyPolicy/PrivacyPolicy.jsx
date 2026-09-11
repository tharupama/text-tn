import React from 'react'
import { Link } from 'react-router-dom'
import '../Pages.css'

const PrivacyPolicy = () => {
  return (
    <div className='page'>
      <h1>Privacy Policy</h1>
      <p className='updated'>Last updated: 11 September 2026</p>
      <p>
        This Privacy Policy explains how EasyTextShare ("we", "our", "us") collects,
        uses, and protects information when you use our text sharing service. By
        using EasyTextShare, you agree to the practices described in this policy.
      </p>

      <h2>1. Information we collect</h2>
      <p>EasyTextShare is designed to work without an account, and we collect only the information needed to run the service:</p>
      <ul>
        <li><strong>Text you share</strong> – the text content and code you voluntarily submit when using the Share text feature.</li>
        <li><strong>Codes you search for</strong> – the code entered in the Find text feature so we can return the matching text.</li>
        <li><strong>Basic technical data</strong> – non-personal information such as browser type, device type, and approximate location, used for security and performance.</li>
      </ul>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To store shared text and return it to anyone who enters the correct code.</li>
        <li>To operate, maintain, and improve the reliability of the service.</li>
        <li>To detect, prevent, and respond to abuse, fraud, or unsafe use of the service.</li>
        <li>To comply with legal obligations and enforce our Terms of Service.</li>
      </ul>

      <h2>3. Data we do not sell</h2>
      <p>
        We do not sell, rent, or trade your personal information or your shared
        text to anyone. The text you share is meant only for the person you give
        the code to.
      </p>

      <h2>4. How we store data</h2>
      <p>
        Shared text and its associated codes are stored securely on cloud servers
        provided by Google, our hosting partner. Access to this data is limited to
        the operators of the service and is protected by industry-standard
        security measures. Text remains stored until removed or no longer required.
      </p>

      <h2>5. Third-party services</h2>
      <p>
        We use Google services, including Firebase, for hosting and data storage,
        and Google AdSense for advertising. These partners may process limited,
        anonymous technical information in accordance with their own privacy
        policies. We recommend you review the
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer"> Google Privacy Policy</a> for details.
      </p>

      <h2>6. Advertising</h2>
      <p>
        We may display advertisements served by third-party advertising networks,
        including Google AdSense, to keep EasyTextShare free. These networks may use
        cookies to show ads relevant to your interests. You can learn more about
        how Google uses data and how to manage your preferences at
        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer"> policies.google.com/technologies/ads</a>.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Cookies are small text files stored on your device. EasyTextShare itself does
        not place cookies, but third-party partners such as advertising networks
        may do so to improve ad relevance and measure performance. You can disable
        cookies in your browser settings at any time.
      </p>

      <h2>8. Children's privacy</h2>
      <p>
        EasyTextShare is not directed at children under the age of 13, and we do not
        knowingly collect personal information from children. If you believe a
        child has shared personal information through the service, please contact
        us and we will remove it promptly.
      </p>

      <h2>9. Your rights</h2>
      <p>
        You can stop using the service at any time. If you would like us to remove
        text you have shared, or if you have questions about your data, contact us
        through the <Link to="/contact">Contact page</Link> and we will respond
        within a reasonable time.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with a new "Last updated" date. Continued use of the
        service after changes are posted means you accept the updated policy.
      </p>

      <h2>11. Contact us</h2>
      <p>
        For any privacy-related questions or requests, please use the
        <Link to="/contact"> Contact page</Link> or email us at
        support@easytextshare.me.
      </p>
    </div>
  )
}

export default PrivacyPolicy