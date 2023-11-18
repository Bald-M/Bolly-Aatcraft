Vue.component('headers', {
    props: ['active'],
    // header template
    template:
        `
        <div class="row">
            <div class="col-md-12 bg-white">
                    <div class="row">
                        <div class="col-md-2 col-6">
                            <img :src="logo" class="logo">
                        </div>
                        
                        <div class="col-md-10 col-6 align-self-md-center d-flex justify-content-md-center">
                            <nav class="navbar navbar-expand-lg">
                                <div class="container-fluid">
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li class="nav-item">
                                                <a class="nav-link active highlight text-highlight" v-if="active === 'HOME'" href="index.html">HOME</a>
                                                <a class="nav-link highlight" v-else href="index.html">HOME</a>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle highlight active text-highlight" v-if="active === 'ABOUT-US'" role="button" data-bs-toggle="dropdown">ABOUT US</a>
                                                <a class="nav-link dropdown-toggle highlight" v-else role="button" data-bs-toggle="dropdown">ABOUT US</a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item highlight" href="company.html">OUR COMPANY</a></li>
                                                    <li><hr class="dropdown-divider"></li>
                                                    <li><a class="dropdown-item highlight" href="culture.html">OUR CULTURE</a></li>
                                                    <li><hr class="dropdown-divider"></li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link highlight active text-highlight" v-if="active === 'SHOWROOM'" href="showroom.html">SHOWROOM</a>
                                                <a class="nav-link highlight" v-else href="showroom.html">SHOWROOM</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link highlight active text-highlight" v-if="active === 'PRODUCTS'" href="products.html">PRODUCTS</a>
                                                <a class="nav-link highlight" v-else href="products.html">PRODUCTS</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link highlight" href="#">NEWS</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link highlight active text-highlight" v-if="active === 'CONTACT-US'" href="contact-us.html">CONTACT US</a>
                                                <a class="nav-link highlight" v-else href="contact-us.html">CONTACT US</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        `,
    data() {
        return {
            logo: 'imgs/Logo/ResizedLogo配色图.png',
            flag: false
        }
    },
})

Vue.component('carousel', {
    props: ['images'],
    template:
        `
        <div class="row">
        <!--        Carousel -->
            <div class="row my-md-5">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img :src="selectedImages[0]" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" v-for="image in selectedImages" v-if="image != selectedImages[0]">
                            <img :src="image" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    `,
    computed: {
        selectedImages() {
            // 根据传入的 images 参数选择要渲染的图片集合
            if (this.images === 'factories')
            {
                return this.factories;
            }
            else if (this.images === 'showrooms')
            {
                return this.showrooms;
            }
            else
            {
                // 如果传入的参数不匹配任何选项，返回一个空数组或其他适当的默认值
                return [];
            }
        }
    },
        data() {
            return {
                showrooms: [
                    'imgs/Showroom/showroom1.jpg',
                    'imgs/Showroom/showroom2.jpg',
                    'imgs/Showroom/showroom3.jpg'
                ],
                factories: [
                    'imgs/工厂图片/1.jpg',
                    'imgs/工厂图片/2.jpg',
                    'imgs/工厂图片/3.jpg',
                    'imgs/工厂图片/4.jpg',
                    'imgs/工厂图片/6.jpg',
                    'imgs/工厂图片/8.jpg',
                    'imgs/工厂图片/11.jpg',
                    'imgs/工厂图片/12.jpg',
                    'imgs/工厂图片/14.jpg',
                    'imgs/工厂图片/15.jpg',
                    'imgs/工厂图片/16.jpg',
                    'imgs/工厂图片/17.jpg',
                    'imgs/工厂图片/18.jpg',
                    'imgs/工厂图片/19.jpg',
                    'imgs/工厂图片/20.jpg',
                    'imgs/工厂图片/21.jpg',
                    'imgs/工厂图片/22.jpg',
                ]
            }
        }
})

// This is a image thumbnail component
Vue.component('thumbnails', {
    props: ['images'],
    template:
        `
        <div class="row">
            <div class="col-md-4" v-for="image in selectedImages">
                <div class="img-thumbnail"><img :src="image" class="w-100"></div>
            </div>
        </div>
        `,
    computed: {
        selectedImages() {
            // 根据传入的 images 参数选择要渲染的图片集合
            if (this.images === 'factories') {
                return this.factories;
            } else if (this.images === 'products') {
                return this.products;
            } else {
                // 如果传入的参数不匹配任何选项，返回一个空数组或其他适当的默认值
                return [];
            }
        }
    },
    data() {
        return {
            factories: [
                'imgs/工厂图片/1.jpg',
                'imgs/工厂图片/2.jpg',
                'imgs/工厂图片/3.jpg',
                'imgs/工厂图片/4.jpg',
                'imgs/工厂图片/6.jpg',
                'imgs/工厂图片/8.jpg',
                'imgs/工厂图片/11.jpg',
                'imgs/工厂图片/12.jpg',
                'imgs/工厂图片/14.jpg',
                'imgs/工厂图片/15.jpg',
                'imgs/工厂图片/16.jpg',
                'imgs/工厂图片/17.jpg',
                'imgs/工厂图片/18.jpg',
                'imgs/工厂图片/19.jpg',
                'imgs/工厂图片/20.jpg',
                'imgs/工厂图片/21.jpg',
                'imgs/工厂图片/22.jpg',
            ]
        }
    }

})

Vue.component('footers', {
    // footer template
    // Bootstrap5
    template:
        `
        <div class="row">
                <!-- Footer -->
            <footer class="text-center text-lg-start bg-white text-muted row">
                <!-- Section: Social media -->
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom row">
                    
                    <!-- Left -->
<!--                    <div class="me-md-5 d-none d-lg-block">-->
<!--                        <span>Get connected with us on social networks:</span>-->
<!--                    </div>-->
                    <div class="fs-6 col-12 col-md-6">
                        <span class="fw-bold font-monospace">Get connected with us on social networks:</span>
                    </div>
                    <div class="col-12 col-md-6 mt-3">
                        <div class="d-flex justify-content-md-end justify-content-center">
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
                        
                    </div>
                </section>
                <!-- Section: Links  -->
                <section>
                    <div class="container text-center text-md-start mt-5">
                        <!-- Grid row -->
                        <div class="row mt-3">
                            <!-- Grid column -->
                            <div class="col-md-3 col-lg-4 col-xl-3 col-6 mx-auto mb-4">
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
                            <div class="col-md-2 col-lg-2 col-xl-2 col-6 mx-auto mb-4">
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
                            <div class="col-md-4 col-lg-3 col-xl-3 col-12 mx-auto mb-md-0 mb-4">
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
                <div class="text-center p-4 font-monospace fw-bold">
                    Copyright © 2023 Zhangzhou Polly Arts Industrial and Trade Co,.Ltd.
                </div>
                <!-- Copyright -->
            </footer>
        </div>
        `
})

Vue.component('product', {
    template:
    `
    <div class="row my-md-5">
        <div class="col-md-4">
            <div v-on:click="menuVisibility('Christmas')" class="product-nav">Christmas</div>
<!--            Christmas sub menu -->
            <div class="mx-md-3" v-show="visible.christmas">
                <div v-on:click="getMenu('Branches & Leaves')" class="product-sub-nav">Branches & Leaves</div>
                <div v-on:click="getMenu('Circle')" class="product-sub-nav">Circle</div>
                <div v-on:click="getMenu('Long Vine')" class="product-sub-nav">Long Vine</div>
                <div v-on:click="getMenu('Water Drop')" class="product-sub-nav">Water Drop</div>
                <div v-on:click="getMenu('Lintel')" class="product-sub-nav">Lintel</div>
                <div v-on:click="getMenu('Candlestick')" class="product-sub-nav">Candlestick</div>
                <div v-on:click="menuVisibility('Potted')" class="product-sub-nav">Potted</div>
                    <div class="mx-md-3" v-show="visible.potted">
                        <div v-on:click="menuVisibility('Decorations')" class="product-sub-nav">Decorations</div>
                    </div>
                <div v-on:click="getMenu('Others')" class="product-sub-nav">Others</div>
            </div>

            <div v-on:click="menuVisibility('Spring')" class="product-nav">Spring</div>
<!--            spring sub menu-->
            <div class="mx-md-3" v-show="visible.spring">
                <div class="product-sub-nav">Floral</div>
                <div class="product-sub-nav">Foliage</div>
                <div class="product-sub-nav">Potted</div>
                <div class="product-sub-nav">Fruit & Berries</div>
                <div class="product-sub-nav">Others</div>
            </div>
            <div v-on:click="menuVisibility('Popular product')" class="product-nav">Popular product</div>
        </div>

        <div class="col-md-8">
            <div v-if="clickedMenu === 'Branches & Leaves'">
                <div class="row row-cols-md-4 row-cols-2">
                    <div v-for="christmas in christmasData" class="img-thumbnail" v-show="christmas.Name.split(' ').indexOf('Branch') != -1">
                        <div><img :src="christmas.Image" class="w-100"></div>

<!--                        <div class="row">-->
<!--                            <div class="img-thumbnail col-md-6" v-for="colour in christmas.Colour.split(',')">-->
<!--                                <img :src="colour" class="h-100">-->
<!--                            </div>-->
<!--                        </div>-->
                        <div class="text-center">{{ christmas.Name }}</div>
                    </div>
                </div>
            </div>
            
            <div v-if="clickedMenu === 'Circle'">
                <div class="row row-cols-md-4">
                    <div v-for="christmas in christmasData" class="img-thumbnail" v-show="christmas.Name.split(' ').indexOf('Circle') != -1">
                        <div><img :src="christmas.Image" class="w-100"></div>
                        <div class="text-center">{{ christmas.Name }}</div>
                    </div>
                </div>
            </div>
            
<!--            <div v-if="clickedMenu === 'Long Vine'">-->
<!--                <div class="row row-cols-md-4">-->
<!--                    <div v-for="christmas in christmasData" class="img-thumbnail" v-show="christmas.Name.split(' ').indexOf('Circle') != -1">-->
<!--                        <div><img :src="christmas.Image" class="w-100"></div>-->
<!--                        <div class="text-center">{{ christmas.Name }}</div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
            
            <div v-if="clickedMenu === 'Water Drop'">
                <div class="row row-cols-md-4">
                    <div v-for="christmas in christmasData" class="img-thumbnail" v-show="christmas.Name.split(' ').indexOf('Drop') != -1">
                        <div><img :src="christmas.Image" class="w-100"></div>
                        <div class="text-center">{{ christmas.Name }}</div>
                    </div>
                </div>
            </div>
            
            <div v-if="clickedMenu === 'Lintel'">
                <div class="row row-cols-md-4">
                    <div v-for="christmas in christmasData" class="img-thumbnail" v-show="christmas.Name.split(' ').indexOf('Lintel') != -1">
                        <div><img :src="christmas.Image" class="w-100"></div>
                        <div class="text-center">{{ christmas.Name }}</div>
                    </div>
                </div>
            </div>
            
            <div v-if="clickedMenu === 'Candlestick'">
                <div class="row row-cols-md-4">
                    <div v-for="christmas in christmasData" class="img-thumbnail" v-show="christmas.Name.split(' ').indexOf('Candlestick') != -1">
                        <div><img :src="christmas.Image" class="w-100"></div>
                        <div class="text-center">{{ christmas.Name }}</div>
                    </div>
                </div>
            </div>
            
<!--             <div v-if="clickedMenu === 'Potted'">-->
<!--                <div class="row row-cols-md-4">-->
<!--                    <div v-for="christmas in christmasData" class="img-thumbnail" v-show="christmas.Name.split(' ').indexOf('Potted') != -1">-->
<!--                        <div><img :src="christmas.Image" class="w-100"></div>-->
<!--                        <div class="text-center">{{ christmas.Name }}</div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

            <div v-if="clickedMenu === 'Others'">
                
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            visible: {
                christmas: false,
                potted: false,
                spring: false
            },
            clickedMenu: '',
            nameExist:false,
            christmasData: {},
        }
    },
    methods: {
        menuVisibility: function (menuName) {
            if (menuName === "Christmas") {
                this.visible.christmas = !this.visible.christmas;
            }
            else if (menuName === "Potted") {
                this.visible.potted = !this.visible.potted;
            }
            else if (menuName === "Spring") {
                this.visible.spring = !this.visible.spring;
            }
        },
        getMenu: function (menuName) {
            this.clickedMenu = menuName;
        },
        loadData() {
            axios.get('/api/christmas')
                .then(response => {
                    this.christmasData = response.data;
                })
                .catch(error => {
                    console.error('Error fetching Circle data:', error);
                });
        }
    },
    watch: {
        clickedMenu(value) {
            if (value === 'Branches & Leaves')
            {
                this.loadData();
                //console.log(value);
            }
            else if (value === 'Others')
            {
                this.loadData();
            }
        }
    }
})

new Vue({
    el: '#templates'
});