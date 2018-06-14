<template>
    <div class="cart">
        <mt-header fixed title="购物车"></mt-header>
        <div class="goods-box">
            <div class="seller">
                <div class="reduce">
                    <mt-badge type="error" size="small" class="badge">满减</mt-badge>
                    <span class="reduce-cont">购满200元，可减50元</span>
                    <span class="to-piece">去凑单></span>
                </div>
                <div class="goods">
                    <div class="dot-box">
                        <div class="dot"></div>
                    </div>
                    <div class="goods-item">
                        <div class="item-pic"></div>
                        <div class="item-msg">
                            <div class="item-head">小米蓝牙耳机青春版 白色 挂耳式 无限运动 通用耳塞</div>
                            <div class="item-desc">0.04kg 青春版 白色 <span>选服务</span></div>
                            <div class="item-price">￥59.00</div>
                            <div class="item-add">
                                <el-input-number size="mini" v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default{
    name: 'my-cart',
      data() {
        return {
          num1: 1
      };
    },
    methods: {
    //   handleChange(value) {
    //       console.log(value);
    //   }
    }
}
</script>
<style scoped>
::-webkit-scrollbar {
    display:none
}
.cart {
    width: 100%;
}
.mint-header{
    background-color: #FE3540;
    font-size:18px;
    height:46px;
    line-height: 46px;
    padding-top: 6px;
}

.goods-box {
    /* background-color: pink; */
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 600px;
}

.seller {
    position: relative;
    left: 0;
    width: 100%;
    height: 100px;
}
.reduce {
    width: 100%;
    position: relative;
    height: 36px;
    line-height: 36px;
    font-size: 12px;
    vertical-align: middle;
    background-color: #fff;
}
.badge {
    position: absolute;
    left: 10px;
    top: 8px;
    line-height: 18px;
}
.reduce-cont{
    position: absolute;
    left: 53px;
    top: 2px;
}
.to-piece {
    position: absolute;
    right: 10px;
    top: 2px;
    color: #FE3540;
    font-weight: bold;
    font-size: 13px;
}
.goods {
    position: relative;
    background-color: pink;
    width: 100%;
    position: absolute;
    top: 36px;
}
.dot-box{
    position: relative;
    width: 10%;
    height: 150px;
    background-color: #fff;
}
.dot{
    position: absolute;
    left: 8px;
    top: 40%;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    /* background-color: #FE3540; */
    border: 1px solid #c0c4cc;
}
.goods-item{
    position: absolute;
    left: 10%;
    top: 0;
    background-color: green;
}
/* 修改饿了么样式 */
.el-input-number--mini {
    width: 100px;
    line-height: 26px;
}
input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled) {
    border-color: #c0c4cc;
}
</style>