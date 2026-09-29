'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M3 12h17m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.3" /></svg>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); button.current?.focus(); } };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  return <header className="header"><div className="header-inner">
    <a href="#home" className="brand" aria-label="Hōm Drafting and Design home"><Image className="brand-logo" src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/hom-logo.png`} alt="Hōm Drafting and Design" width={335} height={362} priority /></a>
    <button ref={button} className="menu-button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}<span className={open ? 'menu-lines is-open' : 'menu-lines'} aria-hidden="true" /></button>
    <nav id="main-navigation" className={open ? 'navigation open' : 'navigation'} aria-label="Main navigation">
      <a href="#studio" onClick={() => setOpen(false)}>Studio</a><a href="#services" onClick={() => setOpen(false)}>Services</a><a href="#process" onClick={() => setOpen(false)}>Our Process</a><a href="#planning" onClick={() => setOpen(false)}>Planning Your Home</a><a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Begin Your Project <Arrow diagonal /></a>
    </nav>
  </div></header>;
}

type Item = { title: string; body: string };
export function Accordions({ items, prefix }: { items: Item[]; prefix: string }) {
  const [active, setActive] = useState<number | null>(null);
  return <div className="accordion">{items.map((item, index) => <div className={`accordion-item ${active === index ? 'expanded' : ''}`} key={item.title}>
    <h3><button id={`${prefix}-heading-${index}`} aria-expanded={active === index} aria-controls={`${prefix}-panel-${index}`} onClick={() => setActive(active === index ? null : index)}>{item.title}<span className="plus" aria-hidden="true" /></button></h3>
    <div id={`${prefix}-panel-${index}`} role="region" aria-labelledby={`${prefix}-heading-${index}`} hidden={active !== index}><p>{item.body}</p></div>
  </div>)}</div>;
}

export function EnquiryForm() {
  const [status, setStatus] = useState('');
  const pending = false;
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // This preview has no delivery service. Never transmit or falsely acknowledge enquiry data.
    setStatus('Online enquiries are currently unavailable. Please call 289 355 4402 to discuss your project.');
  }
  return <form className="enquiry-form" onSubmit={submit}>
    <div className="form-heading"><h3>Tell us about your project.</h3><p>Share a few details about what you have in mind.</p></div>
    <p className="form-note">Online enquiries are currently unavailable. Please <a href="tel:+12893554402">call 289 355 4402</a> to discuss your project.</p>
    <div className="form-grid">
      <label>Full Name <span>*</span><input name="name" autoComplete="name" required maxLength={120} placeholder="Your name" /></label>
      <label>Email Address <span>*</span><input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="Your email address" /></label>
      <label>Phone Number<input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="Optional" /></label>
      <label>Property Location<input name="location" autoComplete="address-level2" maxLength={250} placeholder="Town or city" /></label>
      <label>Project Type <span>*</span><select name="type" defaultValue="" required><option value="" disabled>Select your project</option><option>Custom Home</option><option>Renovation</option><option>Other</option></select></label>
      <label>Preferred Timing<input name="timing" maxLength={120} placeholder="When would you like to begin?" /></label>
      <label className="full-width">Approximate Project Budget<input name="budget" maxLength={120} placeholder="Optional" /></label>
      <label className="full-width">Your Ideas <span>*</span><textarea name="ideas" required minLength={10} maxLength={5000} rows={3} aria-describedby="ideas-help" placeholder="Every home begins with an idea." /><small id="ideas-help">Tell us about your priorities, your property, and what you hope to achieve.</small></label>
    </div>
    <div className="form-bottom"><span>Fields marked * are required</span><button className="button dark" disabled={pending} type="submit">{pending ? 'Sending Your Enquiry' : 'Send Your Enquiry'}<Arrow diagonal /></button></div>
    <p className="form-status" role="status" aria-live="polite">{status}</p>
  </form>;
}
