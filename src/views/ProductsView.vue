<template>
    <TopNav />

    <div class="container mt-md-5">
        <div class="d-flex">

            <!-- left nav -->
            <div class="flex-shrink-0 p-3 bg-white left-nav">
                <div class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                    <i class="bi bi-shop me-md-3"></i>
                    <span class="fs-5 fw-semibold">Products</span>
                </div>

                <ul class="list-unstyled ps-0">
                    <li class="mb-1">
                        <button class="btn" @click="visibleHandler">
                            <i v-if="currentNav === 'Christmas'" class="bi bi-chevron-down"></i>
                            <i v-else class="bi bi-chevron-right"></i>
                            Christmas
                        </button>
                        <!-- Christmas sub menu -->
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small" v-if="currentNav === 'Christmas'">
                            <li @click="filterItems('Branch')">
                                <a class="link-dark rounded">Branches & Leaves</a>
                            </li>
                            <li @click="filterItems('Art Wreath')">
                                <a class="link-dark rounded">Art Wreath</a>
                            </li>
                            <li @click="filterItems('Long Vine')">
                                <a class="link-dark rounded">Long Vine</a>
                            </li>
                            <li @click="filterItems('Water Drop')">
                                <a class="link-dark rounded">Droplet-shaped</a>
                            </li>
                            <li @click="filterItems('Lintel')">
                                <a class="link-dark rounded">Lintel</a>
                            </li>
                            <li @click="filterItems('Candlestick')">
                                <a class="link-dark rounded">Candlestick</a>
                            </li>
                            <li @click="filterItems('Potted')">
                                <a class="link-dark rounded">Potted</a>
                            </li>
                            <li @click="filterItems('Others')">
                                <a class="link-dark rounded">Others</a>
                            </li>

                        </ul>
                    </li>

                    <li class="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed" @click="visibleHandler">
                            <i v-if="currentNav === 'Spring'" class="bi bi-chevron-down"></i>
                            <i v-else class="bi bi-chevron-right"></i>
                            Spring
                        </button>
                        <!-- Spring sub menu -->
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small" v-if="currentNav === 'Spring'">
                            <li @click="filterItems('Floral')">
                                <a class="link-dark rounded">Floral</a>
                            </li>
                            <li @click="filterItems('Foliage')">
                                <a class="link-dark rounded">Foliage</a>
                            </li>
                            <li @click="filterItems('Potted')">
                                <a class="link-dark rounded">Potted</a>
                            </li>
                            <li @click="filterItems('Fruit')">
                                <a class="link-dark rounded">Fruit & Berries</a>
                            </li>
                            <li>
                                <a class="link-dark rounded">Others</a>
                            </li>
                        </ul>
                    </li>

                    <li class="mb-1" @click="visibleHandler">
                        <button class="btn btn-toggle align-items-center rounded collapsed">
                            <i class="bi bi-chevron-right"></i>
                            Popular products
                        </button>
                    </li>
                </ul>
            </div>

            <!-- products -->
            <div class="row">

                <div class="col-md-4 d-flex border" v-for="(item, index) in paginatedProducts" :key="index">
                    <div class="my-md-5">
                        <img ref="productImage" :src="(this.$baseUrl + item.images).split(',')[0]" class="product-img">
                    </div>

                    <div class="mx-md-5 mt-md-5">
                        <h5>Item No: {{ item.itemNo }}</h5>
                        <p>H: {{ item.name.split('"')[0] }}"</p>
                        <div>
                            <div class="option" :style="{ backgroundImage: `url(${this.$baseUrl}${image})` }"
                                v-for="image in item.images.split(',')" @click="selectHandler(index,this.$baseUrl+image)"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Pagination -->
        <div class="d-flex justify-content-md-center mt-3">
            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                        <button class="page-link" @click="currentPage > 1 ? currentPage-- : null" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    <li class="page-item" v-for="page in totalPage" :key="page" :class="{ 'active': page === currentPage }">
                        <button class="page-link" @click="currentPage = page">{{ page }}</button>
                    </li>
                    <li class="page-item" :class="{ 'disabled': currentPage === totalPage }">
                        <button class="page-link" @click="currentPage < totalPage ? currentPage++ : null" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

    <Footer />
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios'

export default {
    name: 'ProductsView',
    components: {
        TopNav,
        Footer,
    },
    data() {
        return {
            currentNav: '',
            products: [],
            selectedFilter: '',
            currentPage: 1,
            itemsPerPage: 12
        }
    },
    methods: {
        visibleHandler(event) {
            this.currentNav = event.target.innerText.trim()
        },
        selectHandler(index,imgUrl) {
            this.$refs.productImage[index].src = imgUrl
            //console.log(this.$refs.productImage[index].src)
        },
        filterItems(value) {
            this.selectedFilter = value
        },
        calculateTotalPages() {
            return Math.ceil(this.filteredProducts.length / this.itemsPerPage)
        },
        debug() {
            console.log('filterProducts:', this.filteredProducts)
            console.log('selectedProducts:', this.selectedFilter)
        }
    },
    created() {
        axios.get('https://www.china-fix.com/bolly-aatcraft/api/items').then(res => {
            this.products = res.data.data
        })
    },
    computed: {
        filteredProducts() {
            if (this.selectedFilter !== '') {
                return this.products.filter((item,index) => item.name.includes(this.selectedFilter))
            }
            else {
                return this.products
            }
        },
        paginatedProducts() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.filteredProducts.slice(startIndex, endIndex);
        },
        totalPage() {
            return Math.ceil(this.filteredProducts.length / this.itemsPerPage / 10);
        }
    }
}
</script>


<style>
.left-nav {
    width: 280px;
}

.btn-toggle-nav a {
    display: inline-flex;
    padding: 0.1875rem 0.5rem;
    margin-top: 0.125rem;
    margin-left: 1.75rem;
    text-decoration: none;
}

.link-dark:hover {
    color: #FC6800 !important;
}

.option {
    width: 36px;
    height: 36px;
    margin: 20px 20px 20px 0;
    background-size: 100% 100%;
    border: 1px solid #dee2e6;
    display: inline-block;
}

.product-img {
    width: 150px;
    height: 200px;
    margin-left: 20px;
}

.product-img:hover{
    display: block;
    transform: scale(3);
}
</style>