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
                            <p>
                                <a href="#!" class="text-reset">News</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Careers</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Investors</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Sustainability</a>
                            </p>
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