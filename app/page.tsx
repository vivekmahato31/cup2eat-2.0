'use client';

import dynamic from 'next/dynamic';
import {
  ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, Coffee,
  Cookie, IceCreamCone, Instagram, Leaf, Mail, Menu, Phone, Sparkles,
  Utensils, X
} from 'lucide-react';
import { useEffect, useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import Reveal from '@/components/Reveal';

const Experience = dynamic(() => import('@/components/Experience'), { ssr: false });

const INSTAGRAM = 'https://www.instagram.com/cup2eat/';
const PHONE = '9818192575';
const PHONE_LINK = 'tel:+919818192575';
const EMAIL = 'Varunkhera6@gmail.com';
const EMAIL_LINK = 'mailto:Varunkhera6@gmail.com';

const images = {
  hero: '/images/cup2eat-coffee-cups.jpg',
  chocolate: 'https://cpimg.tistatic.com/7558178/b/1/edible-dark-chocolate-biscuit-tea-cup.jpg',
  vanilla: 'https://img1.wsimg.com/isteam/ip/0510cad6-226c-4f8c-ad8d-f58bd4a99a73/WhatsApp%20Image%202025-07-22%20at%204.51.33%20PM.jpeg',
  elaichi: 'https://platitalia.com/cdn/shop/products/foodrinks-chocup-6.jpg?v=1684829367&width=1946',
  coated: 'https://baggiocafe.com.br/cdn/shop/files/classico.png?v=1774900461',
  coffee: 'https://dcdn-us.mitiendanube.com/stores/001/373/417/products/cookie-cup-1-0bbf52bf3531addf0416980923579570-1024-1024.webp',
  icecream: 'https://cdn.shopify.com/s/files/1/0299/9985/7795/articles/DSC06714_1400x.jpg?v=1587954693',
  dessert: 'https://christchurch.imagevault.media/publishedmedia/dqrdjqozv9wjw6vihxfn/01_CIAL_Twiice_Cup_FINALS_04_WEB.jpg?height=456&mode=crop&width=608',
  pizza: '/images/cup2eat-pizza-cups.jpg',
  event: '/images/cup2eat-event-display.jpg',
  banner: '/images/cup2eat-event-banner.jpg',
};

const products = [
  {
    number: '01', name: 'Chocolate Flavoured', flavour: 'CHOCOLATE',
    description: 'A cocoa-led edible cup for a distinctive way to serve.',
    image: images.chocolate, fallback: images.hero, tone: 'cocoa',
  },
  {
    number: '02', name: 'Vanilla Flavoured', flavour: 'VANILLA',
    description: 'A familiar, versatile flavour for drinks and desserts.',
    image: images.vanilla, fallback: images.hero, tone: 'vanilla',
  },
  {
    number: '03', name: 'Elaichi Flavoured', flavour: 'ELAICHI',
    description: 'A cardamom-inspired option with an Indian flavour note.',
    image: images.elaichi, fallback: images.pizza, tone: 'elaichi',
  },
  {
    number: '04', name: 'Chocolate Coated', flavour: 'CHOCOLATE COATING',
    description: 'An extra chocolate finish for a richer serving experience.',
    image: images.coated, fallback: images.hero, tone: 'coated',
  },
];

const applications = [
  { title: 'Tea & Coffee', note: 'Give chai, coffee and other favourite sips an edible finish.', image: images.coffee, fallback: images.hero, icon: Coffee, number: '01' },
  { title: 'Ice Cream', note: 'A cup that becomes part of the dessert, not just the serving.', image: images.icecream, fallback: images.hero, icon: IceCreamCone, number: '02' },
  { title: 'Desserts & Bites', note: 'Try a more memorable presentation for sweet or savoury treats.', image: images.pizza, fallback: images.pizza, icon: Cookie, number: '03' },
  { title: 'Cafes & Events', note: 'A conversation-starting serve for menus, counters and gatherings.', image: images.event, fallback: images.banner, icon: Utensils, number: '04' },
];

function Photo({ src, fallback, alt, className = '', priority = false }: {
  src: string; fallback: string; alt: string; className?: string; priority?: boolean;
}) {
  const [current, setCurrent] = useState(src);
  useEffect(() => setCurrent(src), [src]);
  return (
    // Remote reference images have local Cup2Eat photo fallbacks so the layout remains complete offline.
    <img
      className={className}
      src={current}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => { if (current !== fallback) setCurrent(fallback); }}
    />
  );
}

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a className={`wordmark ${light ? 'wordmark-light' : ''}`} href="#home" aria-label="Cup2Eat home">
      <span className="brand-seal"><span>CUP<br /><b>2</b><br />EAT</span></span>
      <span className="wordmark-copy"><strong>CUP<span>2</span>EAT</strong><small>EAT YOUR DRINK!</small></span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ['Our cups', '#our-cups'], ['Why Cup2Eat', '#why'], ['Ways to serve', '#applications'], ['Our story', '#about'], ['Contact', '#contact'],
  ];
  return (
    <>
      <div className="announcement-bar"><span className="announce-dot" /> EDIBLE CUPS · REAL FLAVOURS · A GREENER SERVE <span className="announce-right">SMALL CUP. BIG IMPACT.</span></div>
      <header className="site-header">
        <div className="nav-shell">
          <Wordmark light />
          <nav className={`desktop-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <a className="nav-cta" href="#contact">Bulk enquiry <ArrowUpRight size={16} /></a>
          <button className="mobile-menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    </>
  );
}

function ProductCard({ item }: { item: typeof products[number] }) {
  return (
    <article className={`product-card product-${item.tone}`}>
      <a className="product-image-wrap" href="#contact" aria-label={`Enquire about ${item.name}`}>
        <Photo src={item.image} fallback={item.fallback} alt={`Illustrative edible cup reference for ${item.name}`} className="product-image" />
        <span className="product-number">{item.number}</span>
        <span className="product-image-cta"><ArrowUpRight size={18} /></span>
      </a>
      <div className="product-copy">
        <span className="product-flavour">{item.flavour}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <a className="text-link" href="#contact">Enquire about this flavour <ArrowRight size={15} /></a>
      </div>
    </article>
  );
}

function EnquiryLinks() {
  return (
    <div className="contact-actions">
      <a className="button button-gold" href={PHONE_LINK}><Phone size={17} /> Call {PHONE}</a>
      <a className="button button-outline-light" href={EMAIL_LINK}><Mail size={17} /> Email Cup2Eat</a>
      <a className="button button-outline-light" href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram DM <ArrowUpRight size={15} /></a>
    </div>
  );
}

export default function Home() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 650);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <SmoothScroll />
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> THE EDIBLE CUP EXPERIENCE</p>
              <h1>Eat your<br /><em>drink.</em></h1>
              <p className="hero-tagline">Not just a cup.<br /><strong>It's an experience.</strong></p>
              <p className="hero-description">Meet edible cups made for chai, coffee, ice cream and desserts. Enjoy your favourite drink — then enjoy the cup too.</p>
              <div className="hero-actions">
                <a className="button button-gold" href="#our-cups">Explore our cups <ArrowDown size={17} /></a>
                <a className="hero-text-link" href="#contact">Wholesale & bulk enquiries <ArrowUpRight size={16} /></a>
              </div>
              <div className="hero-caption"><span /> MADE FOR CAFES, RESTAURANTS & EVENTS</div>
            </Reveal>
          </div>
          <div className="hero-visual" aria-label="Cup2Eat edible cup showcase">
            <div className="hero-photo-frame">
              <Photo src={images.hero} fallback={images.pizza} alt="Edible biscuit cups served with a hot drink" className="hero-photo" priority />
            </div>
            <div className="hero-photo-wash" />
            <div className="hero-3d"><Experience /></div>
            <div className="hero-stamp"><span>100%<br /><b>EDIBLE</b><br />BY DESIGN</span><Leaf size={18} /></div>
            <div className="hero-vertical">CUP2EAT · EAT YOUR DRINK!</div>
            <div className="hero-small-note"><span className="note-star">✳</span><span>SMALL CUP.<br />BIG IMPACT.</span></div>
          </div>
          <a className="hero-scroll" href="#quick-facts"><span>SCROLL TO DISCOVER</span><ArrowDown size={15} /></a>
        </section>

        <section className="quick-facts" id="quick-facts" aria-label="Cup2Eat at a glance">
          <div><strong>100 ML</strong><span>CUP CAPACITY</span></div>
          <i />
          <div><strong>03 + 01</strong><span>FLAVOURS & COATED OPTION</span></div>
          <i />
          <div><strong>FSSAI</strong><span>REGISTERED BRAND</span></div>
          <i />
          <div><strong>INDIA</strong><span>DELIVERY ENQUIRIES</span></div>
        </section>

        <section className="products-section section-pad" id="our-cups">
          <div className="section-heading">
            <Reveal>
              <p className="eyebrow">01 — FIND YOUR FLAVOUR</p>
              <h2>A cup for every<br /><em>kind of craving.</em></h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="section-intro">Cup2Eat features three core flavours and a chocolate-coated option. Choose the style that fits your drink, dessert or menu.</p>
              <span className="heading-side-note">100 ML CAPACITY · EDIBLE CUPS</span>
            </Reveal>
          </div>
          <div className="products-grid">
            {products.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.08}>
                <ProductCard item={item} />
              </Reveal>
            ))}
          </div>
          <div className="catalogue-note"><Sparkles size={18} /><span>Need a larger quantity or a flavour mix?</span><a href="#contact">Ask us about wholesale orders <ArrowUpRight size={15} /></a></div>
        </section>

        <section className="why-section section-pad" id="why">
          <div className="why-heading">
            <Reveal>
              <p className="eyebrow eyebrow-light">02 — MORE THAN A SERVING CUP</p>
              <h2>Small cup.<br /><em>Big impact.</em></h2>
              <p className="why-lead">The cup becomes part of the experience. Sip your drink, enjoy the edible cup, and give people one more reason to remember the serve.</p>
            </Reveal>
          </div>
          <div className="why-points">
            <Reveal delay={0.1}><article className="why-point"><span>01</span><div className="why-icon"><Cookie size={22} /></div><h3>100% edible</h3><p>Designed to be enjoyed after the drink — not thrown away as an ordinary cup.</p></article></Reveal>
            <Reveal delay={0.18}><article className="why-point"><span>02</span><div className="why-icon"><Leaf size={22} /></div><h3>A greener idea</h3><p>An edible alternative that brings a more thoughtful touch to serving.</p></article></Reveal>
            <Reveal delay={0.26}><article className="why-point"><span>03</span><div className="why-icon"><Sparkles size={22} /></div><h3>Made to be remembered</h3><p>A distinctive detail for cafes, restaurants, food businesses and events.</p></article></Reveal>
          </div>
          <div className="why-bottom"><span>PURE VEG OPTIONS · VEGAN-FRIENDLY RANGE</span><span>03 / THE CUP2EAT DIFFERENCE</span></div>
        </section>

        <section className="applications-section section-pad" id="applications">
          <div className="section-heading applications-heading">
            <Reveal>
              <p className="eyebrow">03 — POUR. SERVE. ENJOY.</p>
              <h2>One cup.<br /><em>So many ways.</em></h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="section-intro">From everyday chai to a dessert worth photographing, edible cups can add a memorable finishing touch to the menu.</p>
            </Reveal>
          </div>
          <div className="applications-grid">
            {applications.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.number} delay={index * 0.08}>
                  <article className={`application-card application-${item.number}`}>
                    <Photo src={item.image} fallback={item.fallback} alt={`Edible cup serving inspiration for ${item.title}`} className="application-image" />
                    <div className="application-shade" />
                    <div className="application-top"><span>{item.number}</span><Icon size={20} strokeWidth={1.6} /></div>
                    <div className="application-copy"><h3>{item.title}</h3><p>{item.note}</p></div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="story-section" id="about">
          <div className="story-image-wrap">
            <Photo src={images.event} fallback={images.banner} alt="Cup2Eat event display introducing its edible cups" className="story-image" />
            <span className="story-image-tag">CUP2EAT · OUT IN THE WORLD</span>
          </div>
          <div className="story-copy section-pad">
            <Reveal>
              <p className="eyebrow">04 — THE IDEA BEHIND THE CUP</p>
              <h2>Good things<br />should be<br /><em>edible.</em></h2>
              <p className="story-lead">Cup2Eat brings together real flavours and a different kind of serving experience.</p>
              <p>Whether it is a cafe counter, a restaurant menu or a food event, the idea is simple: make the serve part of the memory. Enjoy the drink, then take a bite of the cup.</p>
              <a className="text-link" href={INSTAGRAM} target="_blank" rel="noreferrer">See Cup2Eat on Instagram <ArrowUpRight size={16} /></a>
            </Reveal>
          </div>
        </section>

        <section className="gallery-section section-pad">
          <div className="gallery-heading">
            <Reveal><p className="eyebrow">05 — A CLOSER LOOK</p><h2>Not just a cup.<br /><em>It's an experience.</em></h2></Reveal>
            <Reveal delay={0.12}><a className="text-link" href={INSTAGRAM} target="_blank" rel="noreferrer">More moments on Instagram <ArrowUpRight size={16} /></a></Reveal>
          </div>
          <div className="gallery-grid">
            <Reveal className="gallery-tile gallery-tall"><Photo src={images.hero} fallback={images.pizza} alt="Edible cups prepared with coffee and cream" /><span>THE EVERYDAY SIP</span></Reveal>
            <Reveal delay={0.08} className="gallery-tile"><Photo src={images.pizza} fallback={images.hero} alt="Edible cups served as savoury pizza bites" /><span>THE SAVOURY TWIST</span></Reveal>
            <Reveal delay={0.16} className="gallery-tile"><Photo src={images.icecream} fallback={images.hero} alt="Edible cup dessert inspiration with ice cream" /><span>THE SWEET FINISH</span></Reveal>
          </div>
          <p className="image-note">Some catalogue and serving visuals are illustrative references. Confirm the exact product appearance and current variants with Cup2Eat before ordering.</p>
        </section>

        <section className="wholesale-section" id="contact">
          <div className="wholesale-orbit" aria-hidden="true"><span /><span /><span /></div>
          <div className="wholesale-inner section-pad">
            <Reveal>
              <p className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> FOR CAFES, RESTAURANTS & BULK BUYERS</p>
              <h2>Make your next serve<br /><em>unforgettable.</em></h2>
              <p className="wholesale-copy">Looking to add edible cups to your menu, business or event? Talk to Cup2Eat about available flavours, bulk quantities and current wholesale pricing.</p>
              <EnquiryLinks />
            </Reveal>
            <div className="wholesale-bottom"><span>FSSAI REGISTRATION NO. 22725105002487</span><span>DELIVERY ENQUIRIES ACROSS INDIA</span></div>
          </div>
        </section>

        <section className="faq-section section-pad">
          <div className="faq-heading"><Reveal><p className="eyebrow">QUICK ANSWERS</p><h2>Good to<br /><em>know.</em></h2></Reveal></div>
          <div className="faq-list">
            <details open><summary>What is an edible cup? <ChevronDown size={19} /></summary><p>A cup designed to hold your drink or dessert and be eaten afterwards — a serving experience with a second act.</p></details>
            <details><summary>Which flavours are available? <ChevronDown size={19} /></summary><p>Cup2Eat features Chocolate, Vanilla and Elaichi flavours, plus a Chocolate-Coated option. Ask the team to confirm current availability.</p></details>
            <details><summary>What can I serve in the cups? <ChevronDown size={19} /></summary><p>The brand showcases uses for tea, coffee, ice cream and desserts, with creative serving ideas for food businesses and events.</p></details>
            <details><summary>Can I enquire about wholesale orders? <ChevronDown size={19} /></summary><p>Yes. Cafes, restaurants, food businesses, event teams and bulk buyers can contact Cup2Eat directly for current pricing and quantities.</p></details>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand"><Wordmark light /><p>Not just a cup.<br /><em>It's an experience.</em></p></div>
          <div className="footer-links"><span>EXPLORE</span><a href="#our-cups">Our cups</a><a href="#why">Why Cup2Eat</a><a href="#applications">Ways to serve</a><a href="#about">Our story</a></div>
          <div className="footer-links"><span>GET IN TOUCH</span><a href={PHONE_LINK}>{PHONE}</a><a href={EMAIL_LINK}>{EMAIL}</a><a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a></div>
          <div className="footer-note"><span>✳</span><strong>SIP IT.<br /><em>EAT IT.</em><br />LOVE IT.</strong></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} CUP2EAT. ALL RIGHTS RESERVED.</span><span>GOOD THINGS SHOULD BE EDIBLE.</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
      {showTop && <a className="back-to-top" href="#home" aria-label="Back to top"><ChevronDown size={18} /></a>}
    </>
  );
}
