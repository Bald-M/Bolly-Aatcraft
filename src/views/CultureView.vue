<template>
    <TopNav />

    <!--    Our Culture -->
    <div class="container my-md-5">
        <div class="row">
            <div>
                <p class="fs-1 fw-bold">Our Culture</p>
            </div>

            <div class="row row-cols-md-2 mt-md-3">
                <div>
                    <div class="pill mt-3">
                        <div class="text-center">
                            <p class="fw-bold fs-3">Core Value:</p>
                        </div>

                        <div class="text-center">
                            <p class="font-monospace fs-6">innovate, responsible, Quality, win-win cooperation.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="pill mt-3">
                        <div class="text-center">
                            <p class="fw-bold fs-3">Our Mission:</p>
                        </div>

                        <div class="text-center">
                            <p class="font-monospace fs-6">Leading opportunities with innovation; <br> Create value with
                                quality.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="pill mt-3">
                        <div class="text-center">
                            <p class="fw-bold fs-3">Company Philosophy:</p>
                        </div>

                        <div class="text-center">
                            <p class="font-monospace fs-6">Doing everything with heart and soul.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="pill mt-3">
                        <div class="text-center">
                            <p class="fw-bold fs-3">Our Vision:</p>
                        </div>

                        <div class="text-center">
                            <p class="font-monospace fs-6">Make life more colourful.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>

    <Footer />
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'CultureView',
    components: {
        TopNav,
        Footer,
    }
}
</script>

<style scoped>
.pill {
    width: 544px;
    height: 122px;
    border: 1px solid #dee2e6;
    border-radius: 50rem;
}
</style>