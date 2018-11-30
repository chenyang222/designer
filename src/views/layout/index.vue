<template>
    <div class="layout">
        <div class="header">
            <div class="container-fluid">
                <div class="logo fl">
                    <router-link to="/home"><img src="../../assets/images/logo.png"></router-link>
                </div>
                <div class="router">
                    <ul>
                        <li :class="isNowUrl('home') ? 'active' : ''"><router-link to="/home">首页</router-link></li>
                        <li :class="isNowUrl('apply') ? 'active' : ''"><router-link to="/apply">需求池</router-link></li>
                        <li :class="isNowUrl('sendOrder') ? 'active' : ''"><router-link to="/sendOrder">发单管理</router-link></li>
                        <li :class="isNowUrl('acceptOrder') ? 'active' : ''"><router-link to="/acceptOrder">接单管理</router-link></li>
                        <li :class="isNowUrl('payScore') ? 'active' : ''"><router-link to="/payScore">积分购买</router-link></li>
                        <li :class="isNowUrl('about') ? 'active' : ''"><router-link to="/about">关于自由</router-link></li>
                    </ul>
                </div>
                <div class="account-container fr">
                    <div class="fl logon">
                        <div @click="ShowAccoutMenu">
                            <span class="fl user-display-name ellipsis">娜可露露</span>
                            <span class="fl arrow-down">&nbsp;</span>
                        </div>
                        <ul class="account-menu" v-show="isShowAccoutMenu">
                            <li class="logout"><router-link to="/my">个人中心</router-link></li>
                            <li class="logout">退出</li>
                        </ul>
                    </div>
                    <div class="fl searchBox">
                        <input placeholder="Search users" class="search">
                    </div>
                </div>
            </div>
        </div>
        <!-- content -->
        <router-view></router-view>
        <div class="footer">
            <div class="container">
                <ul>
                    <li>首页</li>
                    <li>需求池</li>
                    <li>发单管理</li>
                    <li>接单管理</li>
                    <li>积分购买</li>
                    <li>关于自由</li>
                    <li>个人中心</li>
                </ul>
            </div>
            <div class="bottom">
                <span>@2018 Designer</span>
                <span><a href="https://www.baidu.com/duty/" target="_blank">自由设计师平台</a></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isShowAccoutMenu: false
    }
  },
  methods: {
    // 判断当前位置
    isNowUrl (url) {
      if (this.$route.path.indexOf(url) === -1) {
        return false
      } else {
        return true
      }
    },
    // 展示下拉
    ShowAccoutMenu (e) {
      e.stopPropagation()
      this.isShowAccoutMenu = true
      this.showList()
    },
    // 点击空白关闭下拉
    showList () {
      document.addEventListener('click', this.hideBox, false)
    },
    hideList () {
      this.isShowAccoutMenu = false
      document.removeEventListener('click', this.hideBox, false)
    },
    hideBox () {
      this.hideList()
    }
  }
}
</script>

<style scoped lang="scss">
.layout{
    min-width: 1080px;
    .container-fluid{
        min-width: 1080px;
        margin: auto;
        padding-left: 30px;
        padding-right: 30px;
    }
    .header{
        color: #919191;
        font-size: 14px;
        position: relative;
        z-index: 99;
        background: #ffffff;
        height: 56px;
        line-height: 56px;
        .logo{
            a{
                text-decoration: none;
                cursor: pointer;
                color: #919191;
            }
        }
        .router{
            display: inline-block;
            li {
                margin-left: 50px;
                &.active {
                    a {
                        opacity: 1;
                    }
                }
            }
        }
        li {
            display: inline-block;
            padding: 0 5px;
            a {
                cursor: pointer;
                color: #919191;
                opacity: .8;
                &:hover {
                    color: #4495f7;
                    opacity: 1;
                }
            }
            &.vline {
                opacity: .2;
            }
        }
        .account-container{
            .logon{
                position: relative;
                cursor: pointer;
                .user-display-name{
                    max-width: 200px;
                }
                .arrow-down{
                    margin-left: 10px;
                    height: 100%;
                    width: 8px;
                    background: url(../../assets/images/arrow-normal.png) no-repeat center;
                }
            }
            .account-menu{
                z-index: 1;
                position: absolute;
                cursor: pointer;
                width: 80px;
                top: 56px;
                background: #ffffff;
            }
            .searchBox{
                margin-left: 20px;
                .search{
                    background: #fff url(../../assets/images/search.png) 10% 50% no-repeat;
                    border-radius: 20px;
                    height: 32px;
                    width: 160px;
                    text-indent: 36px;
                }
            }
        }
    }
    .footer{
        height: 300px;
        background-color: #bababa;
        font-size: 12px;
        color: #fff;
        a {
            color: #fff;
        }
        .container {
            height: 240px;
            .title {
                font-size: 14px;
                font-weight: 700;
                margin-bottom: 8px;
                &:hover {
                    opacity: .8;
                }
            }
            ul {
                float: left;
                margin-top: 60px;
                &:not(.first) {
                    margin-left: 120px;
                }
                li{
                    opacity: .8;
                    line-height: 2;
                    &:hover {
                        opacity: 1;
                    }
                }
                &.weixin img{
                    height: 64px;
                    width: 64px;
                }
                &.authorized img{
                    height: 80px;
                    width: 80px;
                }
                &.authorized,
                &.weixin {
                    li {
                        cursor: default;
                        opacity: .8;
                    }
                }
            }
        }
        .bottom {
            color: #fff;
            opacity: .4;
            height: 60px;
            -webkit-background-clip: padding-box; /* for Safari */
            background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
            border-top: 1px solid rgba(255, 255, 255, .1);
            text-align: center;
            line-height: 60px;
        }
    }
}
</style>
