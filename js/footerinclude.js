const footerTemplate = document.createElement('template');
const headerTemplade = document.createElement('template');

footerTemplate.innerHTML = `
<div class="footer-main">
<div class="footer-text" id="info">
  <h1>Databased</h1>
  <h4>
    <a class="footer-link" href="https://csa.iisc.ac.in"> 
      Department of Computer Science and Automation (CSA)
    </a>
    <br />
  </h4>
  <h5>
    <a class="footer-link" href="https://iisc.ac.in">
      Indian Institute of Science, Bengaluru - 560012, INDIA.
    </a>
  </h5>
  <br>
  <h6>
    Copyright © <span class="copyright">2023</span> IISc, Bengaluru
  </h6>
</div>
<div class="footer-logo">
  <img id="footer-logo" src="./img/Logo_transparent.png" />
</div>
</div>
`;

headerTemplade.innerHTML = `
<nav>
<div class="nav-box">
  <a href="./" class="headerLogo">
    <img src="./img/Logo_transparent.png" alt="databased logo"/>
  </a>

  <a href="./about" class="nav-list-link">About</a>
  <!-- <a href="./learn" class="nav-list-link">Learn</a> -->
  <a href="./events" class="nav-list-link">Events</a>
  <a href="https://databasediisc.blogspot.com/" class="nav-list-link">Blog</a>
  <a href="./pages/projects" class="nav-list-link">Projects</a>
  <a href="./#contact" class="nav-list-link">Contact</a>
  <a href="./sitemap" class="nav-list-link">Sitemap</a>

  <a id="nav-hamburger" data-state="inactive">
    <span></span><span></span><span></span>
    <p>&times;</p>
  </a>
</div>
</nav>
<div id="mobileMenu">
  <a href="./about">About</a>
  <!-- <a href="./learn">Learn</a> -->
  <a href="./events">Events</a>
  <a href="https://databasediisc.blogspot.com/">Blog</a>
  <a href="./pages/projects">Projects</a>
  <a href="./#contact">Contact</a>
  <a href="./sitemap">Sitemap</a>
</div>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = footerTemplate.innerHTML;
  }
}

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = headerTemplade.innerHTML;
  }
}

customElements.define('footer-component', Footer);
customElements.define('header-component', Header);