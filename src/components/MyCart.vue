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
                        <div class="item-pic">
                            <img src="../assets/1.jpg">
                        </div>
                        <div class="item-msg">
                            <div class="item-head">小米蓝牙耳机青春版 白色 挂耳式 无限运动 通用耳塞</div>
                            <div class="item-desc">0.04kg 青春版 白色 <span style="float:right">选服务</span></div>
                            <div style="height:35px;padding-top">
                                <div class="item-price"><span style="font-size:12px;">￥</span><span style="font-size:18px;">59</span><span style="font-weight:600">.00</span></div>
                                <div class="item-add">
                                    <el-input-number size="mini" v-model="num1" :min="1" :max="10"></el-input-number>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="goods-total">
            <div class="all-check">
                <mt-radio v-model="value" :options="options"></mt-radio>
            </div>
            <div class="total-prices">
                合计：<span style="font-weight:bold">￥367.00</span>
            </div>
            <div class="goto-pay">
                <button class="payBut">去结算(3)</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'my-cart',
      data() {
        return {
          num1: 1,
          options: [
            {
                label: '全选',
                value: '值'
            }
          ]

      };
    },
    methods: {
    //   handleChange(value) {
    //       console.log(value);
    //   }
    },
    

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
    top: 33%;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    /* background-color: #FE3540; */
    border: 1px solid #c0c4cc;
}
.goods-item{
    box-sizing: border-box;
    position: absolute;
    left: 10%;
    top: 0;
    width: 87%;
    height: 120px;
    padding: 10px;
    /* border: 1px solid #8E8E8E; */
    box-shadow: 0 2px 6px 0 rgb(246,246,246);
}
.item-pic {
    position: absolute;
    left: 10px;
    width: 92px;
    height: 92px;
}
.item-msg{
    position: absolute;
    left: 112px;
    right: 0;
    text-align: left;
    height: 92px;
    margin-right: 10px;
}
.item-pic img{
    width: 92px;
    height: 92px;
}
.item-head{
    font-size: 13px;
    line-height: 15px;
}
.item-desc{
    font-size: 12px;
    color:#8E8E8E;
    height: 35px;
}
.item-price {
    font-size: 12px;
    color: #FE3540;
    font-weight: bold;
    text-align: left;
    float: left;
    margin-top: 3px;
}
.item-add {
    text-align: right;
    float: right;
}
.goods-total {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 50px;
    width: 100%;
    height: 50px;
    background-color: pink;
}
.all-check{
    position: absolute;
    left: 0;
}
.total-prices{
    position: absolute;
    left: 150px;
}

.payBut{
    border: none;
    background-color: #FE3540;
    color: #fff;
    height: 50px;
    width: 28%;
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