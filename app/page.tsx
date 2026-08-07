const products = [
  {
    name: "LogiHERO",
    tag: "Logistics",
    description:
      "A driver-first logistics workspace for tours, stops, work time and dispatch workflows.",
    status: "In development",
  },
  {
    name: "Fuel & Route",
    tag: "Mobility",
    description:
      "Route-aware fuel cost planning with practical price comparisons across Europe.",
    status: "Coming soon",
  },
  {
    name: "Keto Companion",
    tag: "Lifestyle",
    description:
      "A keto-focused food tracker with simple guidance and AI-assisted food analysis.",
    status: "Coming soon",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="NorbApp home">
          <span className="brandMark">N</span>
          <span>NorbApp</span>
        </a>
        <div className="navLinks">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a className="navCta" href="mailto:hello@norbapp.com">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero shell">
        <div className="eyebrow">Independent software studio</div>
        <h1>Apps that solve <span>real problems.</span></h1>
        <p className="heroCopy">
          NorbApp creates focused software for everyday work, mobility and life — practical by design, fast to use and built around real workflows.
        </p>
        <div className="heroActions">
          <a className="button primary" href="#products">Explore products</a>
          <a className="button secondary" href="mailto:hello@norbapp.com">Get in touch</a>
        </div>
        <div className="heroPanel" aria-hidden="true">
          <div className="orb orbOne" />
          <div className="orb orbTwo" />
          <div className="gridFade" />
          <div className="panelContent">
            <span className="panelBadge">NORBAPP / 2026</span>
            <strong>Build useful.<br />Keep it simple.</strong>
            <small>Web · Android · AI workflows</small>
          </div>
        </div>
      </section>

      <section id="products" className="section shell">
        <div className="sectionHead">
          <div>
            <span className="kicker">Products</span>
            <h2>Small tools. Big usefulness.</h2>
          </div>
          <p>Focused products designed around concrete needs instead of feature overload.</p>
        </div>
        <div className="cards">
          {products.map((product, index) => (
            <article className="card" key={product.name}>
              <div className="cardTop">
                <span className="cardIndex">0{index + 1}</span>
                <span className="tag">{product.tag}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="status"><span />{product.status}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section shell about">
        <div>
          <span className="kicker">About NorbApp</span>
          <h2>Software with a practical point of view.</h2>
        </div>
        <div className="aboutCopy">
          <p>
            NorbApp is an independent app studio focused on useful, approachable software. Every project starts with one question: does this make something meaningfully easier?
          </p>
          <p>
            The studio works across web, Android and AI-assisted products, with an emphasis on clean interfaces, reliable workflows and products people can understand immediately.
          </p>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand"><span className="brandMark">N</span><span>NorbApp</span></div>
        <p>© {new Date().getFullYear()} NorbApp. Built in Germany.</p>
        <a href="mailto:hello@norbapp.com">hello@norbapp.com</a>
      </footer>
    </main>
  );
}
