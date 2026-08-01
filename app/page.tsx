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
          <a href="#contact">Contact</a>
        </div>
        <a className="navCta" href={telegram}>Open Telegram <span>â†—</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <div className="eyebrow"><span></span> AI-ASSISTED DENTAL CARE</div>
          <h1>Dental guidance.<br/><em>Right when you need it.</em></h1>
          <p className="lead">TeleDent.help connects patients with dental professionals through secure remote consultations, smart image analysis and clear next steps.</p>
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
              <div className="scanHead"><span>AI DENTAL SCREENING</span><b>â€¢â€¢â€¢</b></div>
              <div className="tooth">ðŸ¦·<div className="focus"></div></div>
              <div className="progress"><span></span></div>
              <small>Image analysis complete</small>
            </div>
            <div className="result"><span>âœ“</span><div><small>PRELIMINARY RESULT</small><b>Professional review ready</b></div></div>
            <div className="message">Your photos have been reviewed. A dental professional will follow up with clear recommendations.</div>
          </div>
          <div className="floating f1"><b>24/7</b><span>Digital access</span></div>
          <div className="floating f2"><b>Secure</b><span>Private consultation</span></div>
        </div>
      </section>

      <section className="proof"><div className="shell proofGrid"><div><b>3 steps</b><span>to get guidance</span></div><div><b>Fast</b><span>professional response</span></div><div><b>Remote</b><span>from any location</span></div><div><b>Clear</b><span>actionable next steps</span></div></div></section>

      <section className="section shell" id="how">
        <div className="sectionIntro"><span className="kicker">HOW IT WORKS</span><h2>From concern to clarity<br/>in three simple steps.</h2><p>No complicated forms. Just a guided conversation and professional support.</p></div>
        <div className="steps">
          <article><span>01</span><div className="icon">â†—</div><h3>Open the chat</h3><p>Start a private conversation with DentBot in Telegram.</p></article>
          <article className="featured"><span>02</span><div className="icon">â—Ž</div><h3>Share your concern</h3><p>Describe your symptoms and upload clear photos when prompted.</p></article>
          <article><span>03</span><div className="icon">âœ“</div><h3>Get next steps</h3><p>Receive an AI-assisted screening followed by professional guidance.</p></article>
        </div>
      </section>

      <section className="benefits" id="benefits"><div className="shell benefitGrid"><div><span className="kicker light">BUILT AROUND PEOPLE</span><h2>Technology that supports care â€” not replaces it.</h2></div><div className="benefitList"><div><b>01</b><p><strong>Accessible anywhere</strong><span>Get orientation without an unnecessary trip to a clinic.</span></p></div><div><b>02</b><p><strong>Professional oversight</strong><span>Technology helps organize information for a human review.</span></p></div><div><b>03</b><p><strong>Simple and familiar</strong><span>Everything happens in Telegram â€” no new app required.</span></p></div></div></div></section>

      <section className="cta shell" id="contact"><div><span className="kicker">READY WHEN YOU ARE</span><h2>Have a dental concern?<br/><em>Letâ€™s take the first step.</em></h2></div><a className="primary big" href={telegram}>Start consultation <span>â†—</span></a></section>

      <footer className="shell"><a className="brand" href="#top"><span className="brandMark">T</span><span>TeleDent<span>.help</span></span></a><p>Remote dental guidance, made human.</p><p>Â© 2026 TeleDent.help</p></footer>
    </main>
  );
}

