<template>
    <div class="cart">
        <mt-header fixed title="购物车"></mt-header>
        <div class="goods-box">
            <div class="seller">
                <div class="reduce">
                    <mt-badge type="error" size="small" class="badge">满减</mt-badge>
                    <span>购满200元，可减50元</span>
                    <span class="to-piece">去凑单></span>
                </div>
                <div class="goods">
                    <div class="dot"></div>
                    <div class="goods-item">
                        <div class="item-pic"></div>
                        <div class="item-msg">
                            <div class="item-head">小米蓝牙耳机青春版 米白</div>
                            <div class="item-desc"></div>
                            <div class="item-price"></div>
                            <div class="item-add"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
   export default{
       name: 'my-cart'
   }
</script>
<style scoped>
.cart {
    width: 100%;
}
.mint-header{
    background-color: #FE3540;
    font-size:18px;
    height:46px;
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
    position: absolute;
    left: 15px;
    height: 36px;
    line-height: 36px;
    font-size: 12px;
    vertical-align: middle;
    background-color: #fff;
}
.badge {
    margin-right: 5px;
    line-height: 18px;
}
.to-piece {
    position: fixed;
    right: 15px;
    color: #FE3540;
    font-weight: bold;
}
.goods {
    background-color: pink;
    width: 100%;
    height: 180px;
    position: absolute;
    top: 36px;
}
</style>