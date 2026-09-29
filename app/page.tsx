import Image from 'next/image';
import { Accordions, Arrow, EnquiryForm, Header } from './components';
import { images, living, planning, questions, services, steps } from './content';

function LinkButton({ children, href = '#contact', light = false }: { children: React.ReactNode; href?: string; light?: boolean }) {
  return <a className={`text-link${light ? ' light' : ''}`} href={href}>{children}<Arrow diagonal /></a>;
}

function PlanDrawing() {
  return <svg className="plan-drawing" viewBox="0 0 600 430" fill="none" aria-hidden="true">
    <defs><pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" stroke="currentColor" strokeWidth=".35" /></pattern></defs>
    <rect width="600" height="430" fill="url(#grid)" opacity=".35" />
    <g stroke="currentColor" strokeWidth="1.4"><path d="M100 95H505V345H350V375H100Z M107 102H498V338H343V368H107Z M270 102V210M270 258V368M107 235H205M252 235H343V338M343 235V102M343 235H498M400 235V338M350 375H515M505 95V75H100V95M82 95V375M73 95H91M73 375H91M100 68V82M505 68V82" />
    <path d="M270 210h48a48 48 0 0 1-48 48M205 235v47a47 47 0 0 0 47-47M343 160h40a40 40 0 0 1-40 40" strokeWidth=".8" />
    <rect x="127" y="123" width="89" height="68"/><path d="M127 139H216M173 123V139"/><rect x="125" y="290" width="86" height="51"/><path d="M125 302H211M169 290V302"/>
    <path d="M369 121H477V173H462V136H369ZM361 188H458V210H361ZM420 270H480V319H420Z" />
    <path d="M282 290H330V301H282V312H330V323H282V334H330V345H282V356H330"/>
    <path d="M130 98H218M370 98H460M501 130V200M104 255V278M131 371H205" strokeWidth="5"/>
    <circle cx="425" cy="194" r="3"/><circle cx="440" cy="194" r="3"/><circle cx="425" cy="204" r="3"/><circle cx="440" cy="204" r="3"/>
    <path d="M540 349V302M532 313L540 300L548 313M100 395H280"/>
    </g><g fill="currentColor" fontFamily="sans-serif" fontSize="8" letterSpacing="2"><text x="137" y="218">REST</text><text x="370" y="225">GATHER</text><text x="129" y="358">RETREAT</text><text x="291" y="75">A CONSIDERED PLAN</text><text x="535" y="290">N</text></g>
  </svg>;
}

export default function Home() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">
    <section className="hero" id="home">
      <div className="hero-top container"><div className="eyebrow hero-eyebrow"><span className="small-rule" /> RESIDENTIAL DESIGN, PERSONALLY CONSIDERED</div>
        <div className="hero-layout"><h1>A considered home.<br /><em>A personal expression.</em></h1><div className="hero-aside"><p>Custom home and renovation<br className="desktop-break" /> design in Ontario.</p><a href="#contact" className="button dark">Discuss Your Project <Arrow diagonal /></a></div></div>
      </div>
      <figure className="hero-image"><Image {...images.hero} fill priority sizes="100vw" quality={90} /><div className="hero-image-shade" /><figcaption><span>THE POSSIBILITIES OF HOME</span><span>Residential concept rendering <span aria-hidden="true">/</span> Hōm</span></figcaption><a className="explore-circle" href="#studio" aria-label="Discover our approach"><svg viewBox="0 0 24 24" width="23" height="23" fill="none" aria-hidden="true"><path d="M12 3v17m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.1" /></svg></a></figure>
      <div className="hero-foot container"><span>BOWMANVILLE, ONTARIO</span><p>Thoughtful plans for the way you live.</p><span>ESTABLISHED IN EXPERIENCE</span></div>
    </section>

    <section className="studio section container" id="studio"><div className="section-label"><span className="index">01</span><span>THE STUDIO</span></div>
      <div className="studio-content"><h2>Your vision,<br /><em>thoughtfully developed.</em></h2><div className="studio-columns"><div><p className="lead">The most meaningful homes reflect the people who live in them.</p><p>They make room for familiar routines, quiet moments, and time spent together. Begin with your ideas. Discover what home could become.</p></div><div><p>Hōm is a locally owned drafting and design firm in Bowmanville, Ontario, with over 13 years of experience in design and construction.</p><p>We value personal service, informed clients, and the community we call home.</p><p>Your ideas guide the work. Our role is to help give them form.</p></div></div><LinkButton href="#process">Discover Our Approach</LinkButton></div>
    </section>

    <section className="philosophy"><div className="philosophy-image"><Image {...images.residence} fill sizes="(max-width: 760px) 100vw, 55vw" quality={85} /><span className="image-caption">A RESIDENTIAL CONCEPT FROM HŌM</span></div><div className="philosophy-copy"><span className="eyebrow">A QUIETER KIND OF LUXURY</span><h2>The room<br />to <em>live well.</em></h2><p>A welcoming entrance. A kitchen that brings people together. Somewhere quiet to retreat at the end of the day.</p><p>Luxury can be found in the ease of a home that works beautifully.</p><p>As you consider your project, think beyond individual rooms. Consider the experience of moving through them, the moments they will hold, and what will make them feel distinctly yours.</p><LinkButton href="#living">Make Space for What Matters</LinkButton></div></section>

    <section className="services section container" id="services"><div className="section-label"><span className="index">02</span><span>OUR SERVICES</span></div><div className="section-heading"><h2>Considered spaces.<br /><em>Clear plans.</em></h2><p>From the first possibility to the finer details.<br />Discover the support your project needs.</p></div>
      <div className="primary-services">{services.slice(0, 2).map((service, i) => <article key={service.title}><span className="service-number">0{i + 1} /</span><div><h3>{service.title}</h3><p className="service-intro">{service.intro}</p><p>{service.body}</p><LinkButton>Discuss Your Project</LinkButton></div></article>)}</div>
      <div className="other-services">{services.slice(2).map((service, i) => <article key={service.title}><span className="service-number">0{i + 3}</span><div><h3>{service.title}</h3><p>{service.intro}</p></div></article>)}</div><div className="services-end"><span>A clear beginning for your next chapter.</span><LinkButton>Explore Your Project With Us</LinkButton></div>
    </section>

    <section className="process" id="process"><div className="container section"><div className="section-label"><span className="index">03</span><span>OUR PROCESS</span></div><div className="process-intro"><div><h2>From first ideas<br />to <em>a clear direction.</em></h2><p>From concept to the next chapter.</p></div><PlanDrawing /></div><div className="process-steps">{steps.map((step, i) => <article key={step.title}><span className="step-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}</div><LinkButton light>Begin Your Project</LinkButton></div></section>

    <section className="living section container" id="living"><div className="living-heading"><span className="eyebrow">DESIGNED AROUND EVERYDAY LIFE</span><h2>Make space for<br /><em>what matters.</em></h2><p>A useful starting point is to imagine an ordinary day in your future home.</p><p>Where does everyone gather in the morning? What happens when guests arrive? Is there space to concentrate, unwind, or enjoy a moment alone?</p><p>The answers reveal more than a list of rooms ever could.</p></div><Accordions items={living} prefix="living" /></section>

    <section className="inspiration"><div className="inspiration-inner container"><span className="eyebrow">THE FEELING OF HOME</span><h2>A warmer expression<br />of <em>modern living.</em></h2><p>Natural textures, softer forms, and warm colours are shaping current conversations about the home.</p><div className="material-composition" aria-hidden="true"><span className="material stone" /><span className="material wood" /><span className="material olive" /><span className="material linen" /></div><div className="inspiration-columns"><p>Use these ideas as starting points for your own preferences. A restrained palette can still have depth. A simple room can still feel personal. A contemporary home can still offer warmth and familiarity.</p><p>Collect images that resonate with you, then look for what they share. It may be the light, the proportions, the materials, or simply a feeling of calm.</p></div></div></section>

    <section className="planning section container" id="planning"><div className="section-label"><span className="index">04</span><span>PLANNING YOUR HOME</span></div><div className="section-heading"><h2>Before the<br /><em>drawings begin.</em></h2><p>A little preparation.<br />A more considered beginning.</p></div><div className="planning-grid">{planning.map((item, i) => <article key={item.title}><span className="planning-number">0{i + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></section>

    <section className="faq container" id="questions"><div><span className="eyebrow">A LITTLE MORE CLARITY</span><h2>Questions,<br /><em>considered.</em></h2><p>Every project starts somewhere.</p><LinkButton>Let’s Talk About Yours</LinkButton></div><Accordions items={questions} prefix="faq" /></section>

    <section className="invitation"><div className="invitation-art" aria-hidden="true"><div /><div /><div /></div><div className="container"><span className="eyebrow">SOMETHING PERSONAL BEGINS HERE</span><h2>Your next chapter<br /><em>begins at home.</em></h2><p>Perhaps you are imagining a new home. Perhaps you are ready<br className="desktop-break" /> to make your existing space feel more like you.</p><p>Give those ideas a place to begin.</p><a href="#contact" className="button cream">Begin Your Project<Arrow diagonal /></a></div></section>

    <section className="contact section container" id="contact"><div className="contact-copy"><div className="section-label"><span className="index">05</span><span>LET’S BEGIN</span></div><h2>A good home<br />starts with a<br /><em>conversation.</em></h2><p>Tell us what you have in mind.<br />We would love to hear from you.</p><a className="contact-phone" href="tel:+12893554402">289 355 4402<Arrow diagonal /></a><address>14 Ashdale Crescent<br />Bowmanville, Ontario</address></div><EnquiryForm /></section>
  </main><footer className="footer"><div className="container footer-top"><a href="#home" className="footer-brand" aria-label="Hōm Drafting and Design home"><Image className="footer-logo" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/hom-logo.png`} alt="Hōm Drafting and Design" width={335} height={362} /></a><div><p>Hōm Drafting and Design</p><span>Thoughtful plans for the way you live.</span></div><nav aria-label="Footer navigation"><a href="#studio">Studio</a><a href="#services">Services</a><a href="#process">Our Process</a><a href="#contact">Contact</a></nav></div><div className="container footer-bottom"><span>© Hōm Drafting and Design. All rights reserved.</span><span>BOWMANVILLE, ONTARIO</span><a href="https://vavinix.com/" target="_blank" rel="noopener noreferrer">built by vavinix</a><a href="#home">Back to top <Arrow diagonal /></a></div></footer></>;
}
