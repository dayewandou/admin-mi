<template>
	<div class="headerr">
		<div class="nav">
			<div class="nav_con">
				<div class="left">
					<ul class="list">
						<li v-for='item in $router.options.routes' v-if='item.title'>
							<router-link :to='{path:item.path}'>
								{{item.alias}}
							</router-link>
						</li>
						<li><a href="">SelectRegion</a></li>
					</ul>
				</div>
				<div class="right">
					<div class="login">
						<a href="">登录</a>
						<a href="">注册</a>
						<a href="">消息通知</a>
					</div>
					<div class="shopping">
						<i class="iconfont">&#xe60a;</i>
						<span>购物车（0）</span>
					</div>
				</div>
			</div>
	
		</div>
		<div class="banner">
			<div class="logo">
				<a href=""><img src="../../assets/img/logo-footer.png" alt="" /></a>
			</div>
			<div class="menu">
				<ul class="menu_con">
					<li class="sub"><a href="">小米手机</a></li>
					<li class="sub"><a href="">红米</a></li>
					<li class="sub"><a href="">笔记本</a></li>
					<li class="sub"><a href="">电视</a></li>
					<li class="sub"><a href="">盒子</a></li>
					<li><a href="">新品</a></li>
					<li class="sub"><a href="">路由器</a></li>
					<li class="sub"><a href="">智能硬件</a></li>
					<li><a href="">服务</a></li>
					<li><a href="">社区</a></li>
				</ul>
			</div>
			<div class="search">
				<input type="text"  class=""/>
				<i class="iconfont">&#xe6dc;</i>
				<div class="hot">
					<a href="#">红米5 新品</a>
					<a href="#">小米Note 3</a>
				</div>
				<div class="keyword">
					<ul>
						<li><a href="">小米手机6<span>约有24件</span></a></li>
						<li><a href="">小米手机5X<span>约有24件</span></a></li>
						<li><a href="">红米note 4X<span>约有24件</span></a></li>
						<li><a href="">红米手机4X<span>约有24件</span></a></li>
						<li><a href="">小米Max 2<span>约有24件</span></a></li>
						<li><a href="">手环<span>约有24件</span></a></li>
						<li><a href="">耳机<span>约有24件</span></a></li>
						<li><a href="">充电宝<span>约有24件</span></a></li>
						<li><a href="">运动鞋<span>约有24件</span></a></li>
						<li><a href="">路由器<span>约有24件</span></a></li>
						<li><a href="">小米盒子<span>约有24件</span></a></li>
						<li><a href="">电视<span>约有24件</span></a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="submenu">
			<div class="submenu_con">
				<div class="inner">1</div>
				<div class="inner">2</div>
				<div class="inner">3</div>
				<div class="inner">4</div>
				<div class="inner">5</div>
				<div class="inner">5555</div>
				<div class="inner">6</div>
				<div class="inner">7</div>
			</div>
		</div>
	</div>
</template>

<script>
	$(function(){	
		$('.sub,.submenu').mouseenter(function(){
			$('.submenu').css('border-top','2px solid #e0e0e0');
			$('.submenu').css('height',228);
			$('.submenu_con').css('height',228);
		});
		$('.sub,.submenu').mouseleave(function(){
			$('.submenu').css('border-top','2px solid #fff');
			$('.submenu').css('height',0);
			$('.submenu_con').css('height',0);
		});
		//1.inner中的内容overflow:hidden，只有超出隐藏才能隐藏里面的内容
		//2.如果用css中的transition属性，需要给大div和居中的div同时加上transition属性，这样才能同时出现过度效果
		$('.inner').hide();
		$('.sub,.inner').mouseover(function(){
			$('.inner').eq($(this).index()).show().siblings().hide();
		});
	})
	export default {
		name:'header'
	}
</script>

<style lang="scss" scope>
@import '../../assets/scss/tyys.scss';
@import '../../style/common.scss';
@import '../../style/header.scss';
@import '../../assets/font/iconfont.css';
</style>