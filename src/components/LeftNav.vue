<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white left-nav" style="width: 280px; height: 850px;">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-4">Sidebar</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <i class="bi bi-house-fill mx-2"></i>
                <router-link to="/dashboard/home" class="nav-link" :class="{ 'text-primary':tab === 'HOME' }">首页</router-link>
            </li>
            <li>
                <i class="bi bi-database-fill mx-2"></i>
                <router-link to="/test" class="nav-link">图库</router-link>
            </li>
            <li>
                <i class="bi bi-gear-fill mx-2"></i>
                <router-link to="/test" class="nav-link">设置</router-link>
            </li>
        </ul>
    </div>
</template>



<script>
export default {
    name: 'LeftNav',
    data() {
        return {
            tab: 'HOME'
        }
    }
}

</script>


<style scoped>
    .left-nav{
        background-color: #2D374F;
    }

    a{
        display: inline-block;
        color: white !important;
    }

    a:hover{
        color: #0D6EFD;
    }

</style>