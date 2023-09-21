Vue.component('headers',{
    // header template
    template:
        `
        <div class="col-md-12" style="background-color: #f6f6f6">
                <div class="row">
                    <div class="col-md-2" style="padding: 0">
                        <a href="index.html"><img :src="logo" height="115" /></a>
                    </div>
                    <div class="col-md-8">
                        <div class="fs-5">漳州市珀利工艺品有限公司</div>
                        <div class="fs-5">Zhangzhou Polly Arts Industrial and Trade Co,.Ltd</div>
                        <nav class="navbar navbar-expand-md">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="index.html">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="showroom.html">Showroom</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="products.html">Products</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="about-us.html">About Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="contact-us.html">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="col-md-2">
                        <div class="mt-md-3"><a href="#">中文/En</a></div>
                    </div>
                </div>
            </div>
        `,
    data() {
        return {
            logo: 'imgs/Logo/ResizedLogo配色图.png'
        }
    },
})

Vue.component('footers',{
    // footer template
    // Bootstrap5
    template:
        `
            <!-- Footer -->
        <footer class="text-center text-lg-start bg-white text-muted row">
            <!-- Section: Social media -->
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <!-- Left -->
                <div class="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <!-- Left -->

                <!-- Right -->
                <div>
                    <a href="#" class="me-4 link-secondary">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#" class="me-4 link-secondary">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#" class="me-4 link-secondary">
                        <i class="bi bi-google"></i>
                    </a>
                    <a href="#" class="me-4 link-secondary">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#" class="me-4 link-secondary">
                        <i class="bi bi-linkedin"></i>
                    </a>
                </div>
                <!-- Right -->
            </section>
            <!-- Section: Social media -->

            <!-- Section: Links  -->
            <section class="">
                <div class="container text-center text-md-start mt-5">
                    <!-- Grid row -->
                    <div class="row mt-3">
                        <!-- Grid column -->
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <!-- Content -->
                            <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="bi bi-info-square-fill me-3 text-secondary"></i>ABOUT US
                            </h6>
                            <ul style="list-style-type: none" >
                                <li><a href="#" style="text-decoration: none">News</a></li>
                                <li><a href="#" style="text-decoration: none">Careers</a></li>
                                <li><a href="#" style="text-decoration: none">Investors</a></li>
                                <li><a href="#" style="text-decoration: none">Sustainability</a></li>
                            </ul>
                            
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <!-- Links -->
                            <h6 class="text-uppercase fw-bold mb-4">
                                FOLLOW US
                            </h6>
                            <div>
                                <i class="bi bi-twitter"></i>
                                <i class="bi bi-facebook"></i>
                            </div>
                        </div>

                        <!-- Grid column -->
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <!-- Links -->
                            <h6 class="text-uppercase fw-bold mb-4">CONTACT US</h6>
                            <p><i class="bi bi-house-fill me-3 text-secondary"></i>Xiahe Centralised Industrial Zone, Zhangzhou, Fujian Province, China</p>
                            <p>
                                <i class="bi bi-envelope me-3 text-secondary"></i>
                                admin@zzpollyarts.com
                            </p>
                            <p><i class="bi bi-telephone-fill me-3 text-secondary"></i> + 86 0596 8508227</p>
                            <p><i class="bi bi-phone-fill me-3 text-secondary"></i> + 86 19859192259</p>
                        </div>
                        <!-- Grid column -->
                    </div>
                    <!-- Grid row -->
                </div>
            </section>
            <!-- Section: Links  -->

            <!-- Copyright -->
            <div class="text-center p-4">
                Copyright © 2023 Zhangzhou Polly Arts Industrial and Trade Co,.Ltd.
            </div>
            <!-- Copyright -->
        </footer>
        `
})

var app = new Vue({
    el: '#template'
});