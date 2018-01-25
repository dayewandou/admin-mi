<template>
	<div class="admin">
		<header>
			<v-header></v-header>
		</header>
		<section>
			<v-content></v-content>
		</section>
		<footer>
			<v-footer></v-footer>
		</footer>
	</div>
</template>

<script>
	import header from './components/header/header.vue';
	import content from './components/content/content.vue';
	import footer from './components/footer/footer';
	export default {
		name:'admin',
		components:{
			"v-header":header,
			"v-content":content,
			"v-footer":footer
		}
	}
</script>

<style lang="scss" scope>
@import './assets/scss/tyys.scss';
.admin{
	header{
		@include wg(100%,140px);
	}
	footer{
		@include wg(100%,438px);
	}
}
</style>