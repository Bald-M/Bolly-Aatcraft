<template>
    <!-- add-button dialog -->
    <div class="modal fade" v-show="isShow">
        <div class="modal-dialog">
            <!-- add -->
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">添加产品信息</h1>
                    <button type="button" class="btn-close" @click="closeHandler"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3 row">
                        <span class="col-md-3 col-form-label">Item No.</span>
                        <div class="col-md-9">
                            <input type="text" class="form-control" v-model="itemNo">
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <span class="col-md-3 col-form-label">Image</span>
                        <div class="col-md-9">
                            <!-- <input type="file" class="form-control" @change="handleFileChange"> -->
                            <input type="text" class="form-control" v-model="image">
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <span class="col-md-3 col-form-label">Colour</span>
                        <div class="col-md-9">
                            <!-- <input type="file" class="form-control" multiple="multiple"> -->
                            <input type="text" class="form-control" v-model="colour">
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <span class="col-md-3 col-form-label">Name</span>
                        <div class="col-md-9">
                            <input type="text" class="form-control" v-model="name">
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeHandler">取消</button>
                    <button type="button" class="btn btn-primary" @click="submitHandler">提交</button>
                </div>
            </div>
        </div>

        <!-- <div class="spinner-border"></div>
        <div class="alert alert-success">添加成功</div> -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Dialog',
    props: {
        isShow: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            itemNo: '',
            image: '',
            colour: [],
            name: ''
        }
    },
    methods: {
        closeHandler() {
            this.$emit('on-close', false)
        },
        submitHandler() {
            console.log(this.itemNo)
            console.log(this.image)
            console.log(this.colour)
            console.log(this.name)

            axios.post('http://127.0.0.1:2000/upload', {
                itemNo: this.itemNo,
                image: this.image,
                colour: this.colour,
                name: this.name
            })
                .then(res => {
                    console.log(res)
                    
                }).catch(err => {
                    console.log(err)
                })

            // const formData = new FormData()
            // formData.append('image', this.image);

            // axios.post('http://www.china-fix.com/3000/', formData)
            //     .then(response => {
            //         console.log('上传成功！', response.data);
            //     })
            //     .catch(error => {
            //         console.error('上传失败！', error);
            //     });
        },
        handleFileChange(event) {
            const selectedFile = event.target.files[0]

            // 检查是否有选择文件
            if (selectedFile) {
                this.image = selectedFile.name
            } else {
                return
            }
        }
    }
}
</script>

<style>
.modal-dialog {
    position: absolute;
    top: 25% !important;
    left: 40% !important;
    width: 400px;
}

.spinner-border,.alert {
    position: absolute;
    top: 40% !important;
    left: 50% !important;
}




.modal {
    display: contents;
}

</style>