<template>
    <TopNav />

    <div class="container mt-md-5">
        <div class="row">
            <div class="col-md-6">
                <div>
                    <i class="bi bi-buildings me-md-3"></i>
                    <span class="fw-bold font-monospace fs-5">Office</span>
                </div>

                <div>
                    <i class="bi bi-house me-md-3"></i>
                    <span class="fw-bold font-monospace fs-5">Address:</span>
                    <span class="fs-5">Xiahe Centralised Industrial Zone, Zhangzhou, Fujian Province, China</span>
                </div>

                <div>
                    <i class="bi bi-telephone me-md-3"></i>
                    <span class="fw-bold font-monospace fs-5">Tel:</span>
                    <span class="fs-5">(+86) 0596 8508227</span>
                </div>

                <div>
                    <i class="bi bi-envelope me-md-3"></i>
                    <span class="fw-bold font-monospace fs-5">Email:</span>
                    <span class="fs-5">admin@zzpollyarts.com</span>
                </div>

                <hr />

                <div>
                    <i class="bi bi-person me-md-3"></i>
                    <span class="fw-bold font-monospace fs-5">Managing Director:</span>
                    <span class="fs-5">Nick</span>
                    <br />
                    <i class="bi bi-envelope me-md-3"></i>
                    <span class="fw-bold font-monospace fs-5">Email:</span>
                    <span class="fs-5">nick@zzpollyarts.com</span>
                </div>

                <hr />

                <div>
                    <i class="bi bi-person me-md-3"></i>
                    <span class="fw-bold font-monospace fs-5">Overseas Sales Director:</span>
                    <span class="fs-5">winter@zzpollyarts.com</span>
                    <br>
                    <i class="bi bi-envelope me-md-3"></i>
                    <span class="fw-bold font-monospace fs-5">Email:</span>
                    <span class="fs-5">winter@zzpollyarts.com</span>
                    <br>
                    <i class="bi bi-phone me-md-3"></i>
                    <span class="fw-bold font-monospace fs-5">Mobile/Wechat/Whatsapp/Skype:</span>
                    <span class="fs-5">(+86) 19859192259</span>
                </div>

                <hr />


            </div>

            <!-- Map -->
            <div class="col-md-6 col-12 map" id="main"></div>
        </div>


    </div>

    <Footer />
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue';
import Footer from '@/components/Footer.vue';

import * as echarts from 'echarts';
import china from '@/assets/map.json'

export default {
    name: "ContactUsView",
    components: {
        TopNav,
        Footer,
    },
    mounted() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'))
        window.addEventListener('resize', function () { myChart.resize() })
        echarts.registerMap('china', china)

        let option = {
            series: [
                {
                    type: 'map',
                    map: 'china',
                    data: [
                        {
                            name: '福建省',
                            selected: true
                        }
                    ]
                }
            ]
        }
        myChart.setOption(option)
    }
}
</script>
