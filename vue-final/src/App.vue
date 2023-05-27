<template>
    <div>
        <div class="main">
            <div class="search">
                <input type="text" class="search-input">
                <span></span>
            </div>
            <router-view></router-view>
            <div class="end">
                <div class="music">
                    <div class="img"></div>
                    <span class="img-text">Heart Shake</span>
                    <span class="img-text">Morgan James,Hunter</span>
                    <span class="img">
                        <span></span>
                        <!-- <div class="zanting"></div> -->
                    </span>
                </div>
                <div class="click—me">
                    <ul>
                        <router-link to="/">
                            <li>
                                <span></span>
                                <div >首页</div>
                            </li>
                        </router-link>
                        <router-link to="/blog">
                            <li>
                                <span></span>
                                <div >博客</div>
                            </li>
                        </router-link>
                        <router-link to="/community">
                            <li>
                                <span></span>
                                <div >社区</div>
                            </li>
                        </router-link>
                        <router-link to="/user">
                            <li>
                                <span></span>
                                <div >我的</div>
                            </li>
                        </router-link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import community from './components/community.vue';
import login from './components/login.vue';
import register from './components/register.vue';

export default {
  name: 'App',
  components: {
    login,
    register,
    community
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a {
    text-decoration: none;
    color: black;
}
li {
    list-style: none;
}
.search {
    margin-top: 8%;
    margin-left: 16px;
}
.search-input {
    width: 317px;
    height: 36px;
    background: #ffffff;
    border-radius: 18px;
    border: none;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
.end {
    width: 390px;
    height: 182px;
    background: #f8fdf2;
    border-radius: 36px 36px 0px 0px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
    padding: 30px;
    position: absolute;
    bottom: 0;
}
.zanting {
    width: 38px;
    height: 38px;
    background: #a4d579;
    border-radius: 10px;
}
.img {
    width: 50px;
    height: 50px;
    background-image: url('~@/assets/6.png');
}
.click-me {
    width: 390px;
    height: 83px;
    background: #ffffff;
    
}
ul li {
    display: inline-block;
    width: 23%;
    text-align: center;
    margin-top: 38px;
}
ul li a {
    display: block;
}
.mar0 {
    margin: 0 auto;
}
.main {
    width: 390px;
    height: 750px;
    background: linear-gradient(209.94deg,#a4d579 0%,#ffffff 50%,#ffffff 100%);;
    margin: 0 auto;
    opacity: 0.75;
    border: 1px solid white;
    position: relative;
}
.userinfo {
    width: 100%;
}
.love {
    width: 358px;
    height: 140px;
    border: 1px solid;
    border-color: #707070;
    border-radius: 7px;
    background-image: url('~@/assets/2.png');
    margin: 0 auto;
    margin-top: 10px;
}
.contain {
    width: 358px;
    margin: 0 auto;
    margin-top: 16px;
}
.block {
    width: 112px;
    height: 112px;
    display: inline-block;
}
</style>
