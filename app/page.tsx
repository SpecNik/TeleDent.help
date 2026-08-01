const telegram = "https://t.me/teledent_help";

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="TeleDent.help home">
          <span className="brandMark">T</span>
          <span>TeleDent<span>.help</span></span>
        </a>
        <div className="navLinks">
          <a href="#how">How it works</a>
          <a href="#benefits">Benefits</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navCta" href={telegram}>Open Telegram <span>â†—</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <div className="eyebrow"><span></span> AI + OCR DENTAL ASSISTANT IN TELEGRAM</div>
          <h1>Dental AI.<br/><em>Right inside Telegram.</em></h1>
          <p className="lead">Send photos, X-rays or documents in Telegram. AI analyzes the images, OCR extracts important text and measurements, and a dental professional reviews the result before you receive clear next steps.</p>
          <div className="heroActions">
            <a className="primary" href={telegram}>Start in Telegram <span>â†—</span></a>
            <a className="secondary" href="#how">See how it works <span>â†“</span></a>
          </div>
          <div className="trust"><div className="faces"><i>JD</i><i>AK</i><i>MS</i></div><p><b>Fast, human support</b><br/>Wherever you are</p></div>
        </div>

        <div className="visual" aria-label="Example of AI-assisted dental analysis">
          <div className="glow"></div>
          <div className="phone">
            <div className="phoneTop"><span className="miniLogo">T</span><b>TeleDent.help</b><span className="online">â— ONLINE</span></div>
            <div className="scanCard">
              <div className="scanHead"><span>AI + OCR ANALYSIS</span><b>â€¢â€¢â€¢</b></div>
              <div className="tooth">ðŸ¦·<div className="focus"></div></div>
              <div className="progress"><span></span></div>
              <small>Image analysis + text recognition complete</small>
            </div>
            <div className="result"><span>âœ“</span><div><small>PRELIMINARY RESULT</small><b>Professional review ready</b></div></div>
            <div className="message">Your photos have been reviewed. A dental professional will follow up with clear recommendations.</div>
          </div>
          <div className="floating f1"><b>AI + OCR</b><span>Images, X-rays & documents</span></div>
          <div className="floating f2"><b>Telegram</b><span>No new app required</span></div>
        </div>
      </section>

      <section className="proof"><div className="shell proofGrid"><div><b>Telegram</b><span>familiar chat experience</span></div><div><b>AI vision</b><span>screens dental images</span></div><div><b>OCR</b><span>reads text and measurements</span></div><div><b>Human review</b><span>professional oversight</span></div></div></section>

      <section className="section shell" id="how">
        <div className="sectionIntro"><span className="kicker">HOW THE TECHNOLOGY WORKS</span><h2>From a Telegram message<br/>to structured dental insight.</h2><p>AI vision and OCR prepare the information; a dental professional provides the final guidance.</p></div>
        <div className="steps">
          <article><span>01</span><div className="icon">â†—</div><h3>Send it in Telegram</h3><p>Describe the concern and upload a photo, X-ray, referral or other dental document.</p></article>
          <article className="featured"><span>02</span><div className="icon">â—Ž</div><h3>AI and OCR process it</h3><p>Computer vision screens the image while OCR recognizes text, tooth numbers and measurements.</p></article>
          <article><span>03</span><div className="icon">âœ“</div><h3>Professional review</h3><p>A dental professional checks the prepared information and sends understandable next steps.</p></article>
        </div>
      </section>

      <section className="benefits" id="benefits"><div className="shell benefitGrid"><div><span className="kicker light">BUILT AROUND PEOPLE</span><h2>AI organizes the data. A professional guides the patient.</h2></div><div className="benefitList"><div><b>01</b><p><strong>AI image screening</strong><span>Helps identify relevant areas in photos and dental images.</span></p></div><div><b>02</b><p><strong>OCR data extraction</strong><span>Turns text from referrals, reports and images into structured information.</span></p></div><div><b>03</b><p><strong>Human oversight</strong><span>AI output is preliminary and supports â€” never replaces â€” professional judgment.</span></p></div><div><b>04</b><p><strong>Telegram workflow</strong><span>Patients use a familiar messenger instead of installing another application.</span></p></div></div></div></section>

      <section className="team section shell" id="team">
        <div className="sectionIntro"><span className="kicker">THE PEOPLE BEHIND TELEDENT</span><h2>Built by people who believe<br/>dental guidance should be accessible.</h2></div>
        <div className="teamGrid">
          <article className="person"><div className="portrait"><img src="/german-aller.png" alt="German Aller, CEO and Founder of TeleDent" /></div><div className="personInfo"><span>01</span><div><h3>German Aller</h3><p>CEO &amp; Founder, TeleDent</p></div></div></article>
          <article className="person"><div className="portrait"><img src="/nik-vin.png" alt="Nik Vin, TeleDent team" /></div><div className="personInfo"><span>02</span><div><h3>Nik Vin</h3><p>TeleDent Team</p></div></div></article>
        </div>
      </section>

      <section className="cta shell" id="contact"><div><span className="kicker">READY WHEN YOU ARE</span><h2>Have a dental concern?<br/><em>Letâ€™s take the first step.</em></h2></div><a className="primary big" href={telegram}>Start consultation <span>â†—</span></a></section>

      <footer className="shell"><a className="brand" href="#top"><span className="brandMark">T</span><span>TeleDent<span>.help</span></span></a><p>Remote dental guidance, made human.</p><p>Â© 2026 TeleDent.help</p></footer>
    </main>
  );
}

