import React from "react";
import "./index.scss";
import Footer from "../../component/footer";
import TermsBox from "../../component/TermsBox";

function CommunityRules() {
  return (
    <div className="">
      <TermsBox>
        <h2>Sharely Community Guidelines</h2>
        <div className="communityRules__group">
          <span>Sept 01, 2023</span>
          <p>Effective Sept 01, 2023</p>
        </div>

        <div className="communityRules__group communityRules__general">
          <p>
            When sharing content for Sharely, creators have the opportunity to
            engage with the community and potentially receive rewards based on
            content quality and engagement. Content should align with Sharely's
            standards in three key areas: product relevance, audio clarity, and
            visual appeal.
          </p>
        </div>

        <div className="communityRules__group communityRules__usageRights">
          <h4>Usage Rights:</h4>
          <p>
            By utilizing Sharely's services and participating in content
            sharing, you grant Sharely and the associated Brand a perpetual,
            non-sublicensable, worldwide, royalty-free license to use, host,
            store, transmit, reproduce, distribute, modify, create derivative
            works, communicate, publish, publicly perform, and publicly display
            all social media assets associated with your shared content for any
            purpose.
          </p>
        </div>

        <div className="communityRules__group communityRules__productRelevance">
          <h4>Product Relevance</h4>
          <p>
            The content you share should emphasize your experience with the
            featured product. This could include unboxing, product usage, or
            other personal anecdotes related to the product. The Brand's logo
            should be prominently displayed within your shared content.
          </p>
        </div>

        <div className="communityRules__group communityRules__audioClarity">
          <h4>Audio Clarity</h4>
          <p>
            Clear and understandable audio is crucial for effective
            communication. Avoid distracting or unclear audio to ensure your
            content is well-received by both the Brand and your audience.
          </p>
        </div>

        <div className="communityRules__group communityRules__visualAppeal">
          <h4>Visual Appeal</h4>
          <p>
            Approved content for Sharely should prominently feature the product
            throughout the video. While creativity is encouraged, the primary
            goal is to showcase the product in an engaging manner that
            highlights your unique experience as a creator.
          </p>
        </div>

        <div className="communityRules__group communityRules__contentApproval">
          <h4>Content Approval Guidelines</h4>
          <p>To ensure the approval of your content, always:</p>

          <ul>
            <li>
              Follow the product briefing tips provided when you accept your
              Sharely opportunity.
            </li>
            <li>
              Use the correct tags in the video description/caption, as
              specified when accepting your Sharely opportunity.
            </li>
            <li>
              Ensure the featured product is the focal point of your content.
            </li>
            <li>
              Share content in English, as Sharely is currently unable to
              approve content in other languages.
            </li>
            <li>
              Post fullscreen videos, avoiding large black borders or filters.
            </li>
          </ul>
        </div>

        <div className="communityRules__group communityRules__contentDisqualification">
          <h4>Content Disqualifications</h4>
          <p>
            To maintain a positive community environment, avoid the following
            when collaborating with Sharely:
          </p>

          <ul>
            <li>
              Do not artificially boost views or interactions on your content;
              such activities will result in rejection and may lead to the
              deactivation of your Sharely account.
            </li>
            <li>
              Do not post shocking or disturbing content. Sharely is a platform
              for genuine users to share products they love, and content that
              hides faces or wears masks may not align with the community's
              expectations.
            </li>
            <li>Do not share sexually explicit or pornographic content.</li>
            <li>
              Do not create content that discriminates based on race, ethnicity,
              age, sex, religion, nationality, or sexual orientation.
            </li>
            <li>
              Do not use a secondary or "review only" account for Sharely
              content.
            </li>
            <li>
              Do not include the Brand's or Sharely's name in your social media
              account handle or description.
            </li>
            <li>
              Do not focus on the Sharely process in your content or profile;
              the purpose is to share genuine experiences with purchased
              products.
            </li>
            <li>
              Do not submit still frame images or slideshows for your Sharely
              content.
            </li>
            <li>
              Do not include or mention link tools or affiliate codes in your
              content, voiceovers, video descriptions, or anywhere else in
              content submitted to Sharely.
            </li>
            <li>
              Do not repost content previously shared on social media, whether
              by yourself or another creator.
            </li>
            <li>
              Do not misuse "Duets" with unrelated memes or off-brand content.
              Keep your Duets focused on the product or brand you're showcasing.
            </li>
          </ul>
        </div>

        <div className="communityRules__group communityRules__contact">
          <p>
            If you have any uncertainties about the acceptance of your content
            by Sharely, feel free to contact the Sharely Support team at
            support@sharely.fun for assistance, guidance, or feedback.
          </p>
        </div>
      </TermsBox>

      <Footer />
    </div>
  );
}

export default CommunityRules;
