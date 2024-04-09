import React from "react";
import TermsBox from "../../component/TermsBox";
import "./index.scss";
import Footer from "../../component/footer";

function PrivacyPolicy() {
  return (
    <div>
      <TermsBox>
        <h4>Privacy Policy</h4>
        <p>
          <em>April 29, 2022</em>
        </p>
        <p>
          <em>Last updated November 7th, 2021</em>
        </p>

        <p>
          Sharely, the App, provides brands with software allowing them to
          engage their customers in creating TikTok posts for brand promotion
          and user-generated content (UGC). This Privacy Policy outlines how
          personal information is collected, used, and shared when you install
          or use the App in connection with your Shopify-supported store.
        </p>

        <h4>Personal Information Collected by the App:</h4>
        <p>
          When you install the App, it automatically accesses certain
          information from your Shopify account, including:
        </p>
        <ul>
          <li>Customer order data for Sharely sign-up attribution</li>
          <li>Product listing information</li>
          <li>
            Your current ScriptTags to add Sharely functionality to specific
            pages
          </li>
        </ul>

        <p>
          After installing the App, the following types of personal information
          may be collected from you or your customers:
        </p>
        <ul>
          <li>Name and email for customer account updates</li>
          <li>Phone number for contacting customers about creating Bounties</li>
          <li>
            Social media handle (e.g., TikTok username) to enhance the
            customer's experience and allow proper tagging when creating content
          </li>
        </ul>

        <p>
          Additionally, when Sharely is installed on your page, information is
          collected for analytics, telemetry, and to improve the experience for
          brands and customers:
        </p>
        <ul>
          <li>Device Information/Specifications.</li>
          <li>
            Technical information about your computer or mobile device (e.g.,
            device type, web browser, operating system, IP address)
          </li>
          <li>Length and extent of usage</li>
          <li>Facebook and TikTok Pixel IDs for attribution and metrics</li>
          <li>
            Product details (product, product price, product ID) for purchase
            verification
          </li>
          <li>
            Shop details (shop name, current theme, country, currency) for
            analytics and telemetry
          </li>
          <li>
            Customer actions (e.g., opening and closing the call to action) for
            analytics
          </li>
        </ul>

        <p>
          The App collects personal information directly from the individual,
          through the Shopify account, or via technologies such as:
        </p>
        <ul>
          <li>
            <strong>Cookies:</strong> Data files placed on your device or
            computer, often with an anonymous unique identifier. For information
            on cookies and how to disable them, visit{" "}
            <a href="https://www.allaboutcookies.org">All About Cookies</a>.
          </li>
          <li>
            <strong>Log files:</strong> Record actions on the site, collecting
            data like IP address, browser type, Internet service provider,
            referring/exit pages, and date/time stamps.
          </li>
          <li>
            <strong>Web beacons, tags, and pixels:</strong> Electronic files
            used to record information about your site browsing.
          </li>
        </ul>

        <h4>How the App Uses Personal Information:</h4>
        <p>
          The collected personal information is used for various purposes,
          including:
        </p>
        <ul>
          <li>Customer communication for account updates</li>
          <li>Contacting customers about creating Bounties</li>
          <li>Enhancing customer experience using Sharely</li>
          <li>Analytics for improving services and features</li>
          <li>Attribution and metrics using Facebook and TikTok Pixel IDs</li>
          <li>Purchase verification</li>
          <li>Analytics and telemetry to enhance the Sharely experience</li>
        </ul>

        <h4>Changes to the Privacy Policy:</h4>
        <p>
          The Privacy Policy may be updated, and it's advised to check for the
          latest version. The date of the last update is provided for reference.
        </p>

        <p>
          For further details about privacy practices, you can contact Sharely
          at <a href="mailto:contact@sharelyapp.fun">contact@sharelyapp.fun</a>.
        </p>

        <h4>How We Use Your Personal Information:</h4>
        <p>
          We utilize the collected personal information to provide the Service,
          operate the App, and for the following purposes:
        </p>
        <ul>
          <li>Communication with you</li>
          <li>Optimization or improvement of the App</li>
          <li>
            Providing information or advertising related to our products or
            services
          </li>
        </ul>

        <h4>Sharing Your Personal Information:</h4>
        <p>
          We may share your Personal Information in the following circumstances:
        </p>
        <ul>
          <li>To comply with applicable laws and regulations</li>
          <li>
            In response to a subpoena, search warrant, or other lawful request
            for information
          </li>
          <li>To protect our rights</li>
        </ul>

        <h4>Behavioural Advertising:</h4>
        <p>
          We use your Personal Information for targeted advertisements or
          marketing communications that we believe may be of interest to you. To
          learn more about how targeted advertising works, visit the Network
          Advertising Initiative’s educational page{" "}
          <a href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work">
            here
          </a>
          . You can opt out of targeted advertising by visiting the Digital
          Advertising Alliance’s opt-out portal{" "}
          <a href="http://optout.aboutads.info">here</a>.
        </p>

        <h4>Your Rights:</h4>
        <p>
          If you are a European resident, you have the right to access, correct,
          update, or delete your personal information. To exercise this right or
          for any inquiries, contact us through the information provided below.
          Note that we process your information to fulfill contracts or pursue
          legitimate business interests. Your information may be transferred
          outside of Europe, including to Canada and the United States.
        </p>

        <h4>Data Retention:</h4>
        <p>
          Order Information obtained through the Site will be retained for our
          records unless you request its deletion.
        </p>

        <h4>Changes:</h4>
        <p>
          This privacy policy may be updated to reflect changes in practices or
          for operational, legal, or regulatory reasons.
        </p>

        <h4>Contact Us:</h4>
        <p>
          For more information, questions, or complaints regarding our privacy
          practices, contact us via email at{" "}
          <a href="mailto:support@earnsharely.fun">support@earnsharely.fun</a>{" "}
          or by mail at:
        </p>
        <p>The Sharely App, Inc.</p>
      </TermsBox>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
