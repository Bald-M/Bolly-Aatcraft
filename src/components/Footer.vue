<template>
    <div class="container-md mt-md-5">
        <div class="row border-top">
            <div class="mt-md-3 col-md-3">
                <i class="bi bi-info-square-fill me-md-3"></i>
                <span class="font-monospace fw-bold fs-5">ABOUT US</span>
                <ul class="mt-md-3 list-unstyled">
                    <li>News</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Sustainability</li>
                </ul>
            </div>

            <div class="mt-md-3 col-md-3">
                <i class="bi bi-info-square-fill me-md-3"></i>
                <span class="font-monospace fw-bold fs-5">FOLLOW US</span>
                <div class="mt-md-3">
                    <i class="bi bi-linkedin me-md-3"></i>
                    <i class="bi bi-facebook me-md-3"></i>
                    <i class="bi bi-twitter me-md-3"></i>
                    <i class="bi bi-wechat me-md-3"></i>
                </div>
            </div>

            <div class="mt-md-3 col-md-3">
                <div>
                    <i class="bi bi-info-square-fill me-md-3"></i>
                    <span class="font-monospace fw-bold fs-5">CONTACT US</span>
                </div>

                <div class="mt-md-3">

                    <p><i class="bi bi-house-fill me-md-3"></i>Xiahe Centralised Industrial Zone, Zhangzhou, Fujian
                        Province, China</p>
                    <p><i class="bi bi-envelope me-md-3"></i>admin@zzpollyarts.com</p>
                    <p><i class="bi bi-telephone-fill me-md-3"></i>+ 86 0596 8508227</p>
                    <p><i class="bi bi-phone-fill me-md-3"></i>+ 86 19859192259</p>

                </div>
            </div>
        </div>
        <div class="row text-md-center mt-md-5">
            <span class="font-monospace fw-bold fs-5">Copyright © 2023 Zhangzhou Polly Arts Industrial and Trade
                Co,.Ltd.</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
/* Mobile Phone */
@media screen and (max-width: 768px) {
    .list-unstyled {
        padding-left: 32px;
    }
}

/* Ipad */
@media screen and (min-width: 768px) {
    .list-unstyled {
        padding-left: 32px;
    }
}

/* Desktop */
@media screen and (min-width: 992px) {
    .list-unstyled {
        padding-left: 32px;
    }

}
</style>