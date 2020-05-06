<template>
	<div>
		<div class="white-text center-align custom-font">
			{{ block.title }}
		</div>
		<div class="center-align">
			{{ block.priority }}
		</div>
		<button class="btn-floating waves-effect waves-light purple accent-1"  v-on:click="send_remove(block.id)"><i class="material-icons">delete</i></button>
	</div>
</template>

<script>
export default {
	name: 'card',
	props: {
		block : {}
	},
	methods : {
        send_remove : function(id) {
            this.$emit('get-remove', id);
        }
    }
}
</script>

<style>
	.custom-font {
		font-size: 15px;
		font-weight: 600;
		margin-bottom: 10px;
	}
</style>

