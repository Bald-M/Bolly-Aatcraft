<template>
    <TopNav />

    <div class="container mt-md-5">
        <div class="row">
            <!--        Title-->
            <div>
                <p class="fs-1 fw-bold text-success">DEVELOPMENT HISTORY</p>
            </div>

            <div class="row row-cols-md-5 row-cols-2">

                <div v-for="(item, index) in data" :key="index">
                    <h5 class="card-header">{{ item.year }}</h5>
                    <!--                progress bar-->
                    <div class="progress my-md-2" role="progressbar" aria-label="Success example" aria-valuenow="1"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" :style="{ 'width': item.progress + '%' }"></div>
                    </div>

                    <img :src="item.img" class="w-100" />
                    <div class="card-body">
                        <p class="card-text text-center">Set up processing factory</p>
                    </div>
                </div>

                <!--            To be continued-->
                <div>
                    <h5 class="card-header">&nbsp;</h5>
                    <!--                progress bar-->
                    <div class="progress my-md-2" role="progressbar" aria-label="Success example" aria-valuenow="8"
                        aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-success" style="width: 1.7%"></div>
                    </div>

                    <div class="card-body">
                        <p class="card-text text-center text-success">To be continued</p>
                    </div>
                </div>

            </div>


        </div>

        <div class="row my-md-5 my-5">
            <!--        Title-->
            <div>
                <p class="fs-1 fw-bold">Our Company</p>
            </div>
            <!--    Content-->
            <div>
                <p class="fs-6 font-monospace">Zhangzhou Polly Arts Industrial and Trade Co.,Ltd was founded in 2013，In the
                    early stage, it mainly produces a series of medium and high-end crafts such as artificial greenery,
                    artificial flowers and Christmas trees.</p>
                <p class="fs-6 font-monospace">Our company has developed steadily since 2013, the owner and the whole
                    management's technology of artificial flowers goes back to 1995, and the workers are all masters with
                    20-30
                    years of experience, We have a series of processes
                    from fabric dyeing, injection moulding, printing and so on, which are all one-stop! so we have a wealth
                    of
                    experience in production as well as an absolute price advantage.</p>
                <p class="fs-6 font-monospace">Innovate, Responsible, Quality, Win-win co-operation are our core values. We
                    will
                    adhere to the spirit of innovation, continue to design popular products, and for the global partners are
                    responsible for the quality of the top priority, and Our Vision is Make life more colourful.</p>
            </div>

        </div>
    </div>


    <Footer />
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue';
import Footer from '@/components/Footer.vue';

class Milestone {
    constructor(year, progress, img, content) {
        this.year = year
        this.progress = progress
        this.img = img
        this.content = content
    }
}

export default {
    name: 'CompanyView',
    components: {
        TopNav,
        Footer,
    },
    data() {
        return {
            data: [
                new Milestone(2013, 1.1, this.$baseUrl+'4.jpg', 'Set up processing factory'),
                new Milestone(2014, 1.2, this.$baseUrl+'9.jpg', 'Increase production line'),
                new Milestone(2015, 1.3, this.$baseUrl+'10.jpg', 'Add machines, scale up'),
                new Milestone(2016, 1.4, this.$baseUrl+'7.jpg', 'Increase production line'),
                new Milestone('2017~2018', 1.5, this.$baseUrl+'packedboxes.jpg', 'To be the supplier of foreign trade companies, stable shipments to all over the world'),
                new Milestone(2019, 1.6, this.$baseUrl+'12.jpg', 'Set up R&D department'),
                new Milestone(2021, 1.7, this.$baseUrl+'20.jpg', 'Self-designed products'),
                new Milestone(2022, 1.8, this.$baseUrl+'22.jpg', 'Look for sustainable development strategies'),
                new Milestone(2023, 1.9, this.$baseUrl+'gallery.jpg', 'Set up oversea sales department'),
            ]
        }
    },
}
</script>