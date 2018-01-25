<template>
	<div class="content">
		<!--轮播-->
		<div class="lunbo">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide">
			        	<img src="../../assets/img/xmad_1513304443358_gzjfM.jpg" alt="" />
			        </div>
			        <div class="swiper-slide">
			        	<img src="../../assets/img/xmad_1514889204586_CUSnl.jpg" alt="" />
			        </div>
			        <div class="swiper-slide">
			        	<img src="../../assets/img/xmad_15039951895346_BYpul.jpg" alt="" />
			        </div>
			        <div class="swiper-slide">
			        	<img src="../../assets/img/xmad_15144616645791_zJaAK.jpg" alt="" />
			        </div>
			        <div class="swiper-slide">
			        	<img src="../../assets/img/xmad_15145549810941_gyAQN.jpg" alt="" />
			        </div>
			    </div>
			    <!-- 如果需要分页器 -->
			    <div class="swiper-pagination"></div>
			    
			    <!-- 如果需要导航按钮 -->
			    <div class="swiper-button-prev"></div>
			    <div class="swiper-button-next"></div>
			</div>
			<!--轮播左面的分类-->
			<div class="sidebar">
				<ul class="bar">
					<li>
						<a href="">手机 电话卡</a>
						<i class="iconfont">&#xe6dc;</i>
						
					</li>
					<li><a href="">笔记本</a><i class="iconfont">&#xe6dc;</i>
						
					</li>
					<li><a href="">电视 盒子</a><i class="iconfont">&#xe6dc;</i>
						
					</li>
					<li><a href="">路由器 智能硬件</a><i class="iconfont">&#xe6dc;</i>
						
					</li>
					<li><a href="">移动电源 电池 插线板</a><i class="iconfont">&#xe6dc;</i>
						
					</li>
					<li><a href="">耳机 音箱</a><i class="iconfont">&#xe6dc;</i>
						
					</li>
					<li><a href="">保护套 贴膜</a><i class="iconfont">&#xe6dc;</i>
						
					</li>
					<li><a href="">线材 支架 存储卡</a><i class="iconfont">&#xe6dc;</i>
						
					</li>
					<li><a href="">箱包 服饰 鞋 眼镜</a><i class="iconfont">&#xe6dc;</i>
						
					</li>
					<li><a href="">米兔 生活周边</a><i class="iconfont">&#xe6dc;</i>
						
					</li>
				</ul>
				<div class="bar_column">
					<div class="bar1 bar-main">
							1111111
						</div>
					<div class="bar1 bar-main">
							222222222
						</div>
					<div class="bar1 bar-main">
							33333333
						</div>
					<div class="bar1 bar-main">
							4444444444
						</div>
					<div class="bar1 bar-main">
							55555555555
						</div>
					<div class="bar1 bar-main">
							666666666
						</div>
					<div class="bar1 bar-main">
							777777777
						</div>
					<div class="bar1 bar-main">
							8888888888
						</div>	
					<div class="bar1 bar-main">
							9999999999
						</div>	
					<div class="bar1 bar-main">
							101010101010
						</div>	
				</div>
			</div>
		</div>
		<div class="column">
			<div class="column_left">
				<ul>
					<li>
						<i class="iconfont">&#xe63a;</i>
						<span>选购手机</span>
					</li>
					<li>
						<i class="iconfont">&#xe611;</i>
						<span>企业团购</span>
					</li>
					<li>
						<i class="iconfont">&#xe504;</i>
						<span>F码通道</span>
					</li>
					<li>
						<i class="iconfont">&#xe502;</i>
						<span>米粉卡</span>
					</li>
					<li>
						<i class="iconfont">&#xe501;</i>
						<span>以旧换新</span>
					</li>
					<li>
						<i class="iconfont">&#xe610;</i>
						<span>话费充值</span>
					</li>
				</ul>
			</div>
			<div class="column_right">
				<ul>
					<li>
						<a href="">
							<img src="../../assets/img/xmad_15147371866995_gWitc.jpg" alt="" />
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/img/xmad_15147688990809_FAHTu.jpg" alt="" />
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../assets/img/xmad_15148901270657_IObvL.jpg" alt="" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	$(function(){
		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay:true,
		    pagination: {
		      el: '.swiper-pagination',
		      clickable :true
		    },
		    navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },
		})   
	})
	export default {
		name:'content',
		methods:{
			
		},
		mounted(){
			$('.bar_column .bar-main').hide();
			$('.sidebar .bar>li').mouseover(function(){
				$('.bar_column .bar-main').eq($(this).index()).show().siblings().hide();
			});
			$('.sidebar .bar>li').mouseout(function(){
				$('.bar_column .bar-main').hide();
			});
			$('.bar-main').mouseenter(function(){
				$(this).show().siblings().hide();
			});
			$('.bar-main').mouseleave(function(){
				$('.bar-main').hide();
			});
		}
	}
</script>

<style lang="scss" scope>
	@import '../../assets/scss/tyys.scss';
	@import '../../style/content.scss';
</style>