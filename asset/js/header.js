class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <!-- ======= Top Bar ======= -->
        <div id="topbar" class=" d-flex fixed-top ">
            <div class="container d-flex align-items-center justify-content-between">
              <div class="switch-theme d-flex align-items-center gap-3">
                <div>+62895422388034</div>
                
                
              </div>
              <div class="social-links d-flex gap-3"> 
                <a href="https://link.dialogika.co/twitter" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="https://link.dialogika.co/facebook" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/_mhudha/" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/miftakhul-hudha/" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
              </div>
            </div>
        </div>

    <!-- ======= Header ======= -->
      <header id="header" class="hero fixed-top">
        <div class="container d-flex align-items-center  justify-content-between">
          <div class="d-flex gap-2 align-items-center">
            <a href="#" class="logo">
              <img src="asset/img/logo.svg" class="img-fluid">
              
            </a>
            <a>META COMPANY</a>
          </div>

          <nav id="navbar" class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <!-- Button Toggle untuk Mobile -->
              <button class="navbar-toggler border-0 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                <i class="bi bi-list fs-3"></i>
              </button>

              <!-- Navbar Links untuk Desktop -->
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class=" d-flex align-items-center gap-3">
                  <li class="nav-item"><a class="nav-link text-white active" href="#hero">Home</a></li>
                  <li class="nav-item"><a class="nav-link text-white" href="#services">Services</a></li>
                  <li class="nav-item"><a class="nav-link text-white" href="#about">About Us</a></li>
                  <li class="nav-item"><a class="nav-link text-white" href="#contact">Contact Us</a></li>
                  
                </ul>
              </div>
            </div>
            
          </nav>

          <!-- Sidebar Menu (Offcanvas) untuk Mobile -->
          <div class="offcanvas offcanvas-end bg-dark text-white" tabindex="-1" id="offcanvasNavbar">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title">Menu</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav gap-3">
                <li class="nav-item"><a class="nav-link text-white active" href="#hero">Home</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#services">Services</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#about">About Us</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#contact">Contact Us</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#portfolio">More</a></li>
              </ul>
          </div>
        </div>
      </header>

    
    `;
  }
}

customElements.define('main-header', Header); 
//  The  connectedCallback  method is called when the element is added to the DOM. In this method, we set the inner HTML of the element to the navigation menu. 
//  Now, we can include the header component in the  index.html  file. 
//  <!-- index.html -->