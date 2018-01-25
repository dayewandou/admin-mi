<template>
	<div class="footer">
		<div class="site-footer">
			<div class="site_con">
				<div class="site_top">
					<ul class="tab">
						<li v-for='(item,index) in $router.options.routes' v-if='item.hidden'>
							<i class="iconfont">&#xe611;</i>
						    <router-link :to='{path:item.path}'>{{item.alias}}</router-link>
						</li>
					</ul>
				</div>
				<div class="site_end">
					<div class="site_service">
						<dl v-for='item in $router.options.routes' v-if='item.hide'>
							<dt>{{item.alias}}</dt>
							<dd v-for='child in item.children'>
								<router-link :to='{path:item.path}'>
									{{child.alias}}
								</router-link>
							</dd>
						</dl>
					</div>
					<div class="site_callus">
						<h2>400-100-5678</h2>
						<p>周一至周日 8:00-18:00</p>
						<p>（仅收市话费）</p>
						<a href="http://localhost:8080/#/service/content">
							<i class="iconfont">&#xe611;</i>
							<span> 24小时在线客服</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="site-info">
			<div class="container">
				<div class="logo">
					<img src="../../assets/img/logo-footer.png" alt="" />
				</div>
				<div class="info-text">
					<p class="sites">
						<span v-for='item in $router.options.routes' v-if='item.sites'>
							<router-link :to='{path:item.path}'>
								{{item.alias}}
							</router-link>
							<i>|</i>
						</span>
						<span>Select Region</span>
					</p>
					<p>
						©<a href="">mi.com</a>京ICP证110507号 
						 <a href="">京ICP备10046444号</a>
						 <a href="">京公网安备11010802020134号 </a>
						 <a href="">京网文[2014]0059-0009号</a>
						 <br/>
						  违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
					</p>
				</div>
				<div class="info-img">
					<span v-for='item in $router.options.routes' v-if='item.integrity'>
						<!--v-for能循环router-link吗？里面加上img图片怎么循环呢？
							img的src地址不同
						-->
						<router-link :to='{path:item.path}'>
							<img src="../../assets/img/v-logo-1.png" alt="" />
						</router-link>
					</span>
				</div>
			</div>
			<div class="contain">探索黑科技，小米为发烧而生</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scope>
	@import '../../assets/scss/tyys.scss';
	@import '../../style/footer.scss';
</style>