<template>
	<div id="app">
		<kanban-board v-bind:stages="stages" v-bind:blocks="blocks" @update-block="updateBlock">
			<div v-for="stage in stages" :slot="stage" :key="stage">
				<h2>{{ stage }}</h2>
			</div>
			<div v-for="block in blocks" :slot="block.id" :key="block.id">
				<card :block="block"  v-on:get-remove="remove"></card>
			</div>
		</kanban-board>
	</div>
</template>

<script>
	import card from "./components/Card.vue";
	export default {
		name: 'App',
		components: {
			card
		},
		data () {
			return {
				stages: ['on-hold', 'in-progress', 'needs-review', 'approved'],
				blocks: [],
				config: {
					accepts(block, target, source) {
						return source.dataset.status !== 'approved'
					}
				}
			}
		},
		methods: {
			updateBlock(id, status) {
				this.blocks.find(b => b.id === Number(id)).status = status;
				for(let i = 0; i < this.blocks.length ; i++){
					for(let j = i+1; j < this.blocks.length; j++){
						if(this.blocks[j].priority > this.blocks[i].priority){
							let tmp = this.blocks[j];
							this.blocks[j] = this.blocks[i];
							this.blocks[i] = tmp;
						}
					}
				}
			},
			remove(id) {
				this.blocks.forEach(item => {
					if(item.id == id){
						this.blocks.splice(this.blocks.indexOf(item),1);
					}
				});
			}
		},
		mounted () {
			var id = "appWC1vg7U7T65ofg";
			var key = "keyS9trR1RqwnCn3i";
			fetch("https://api.airtable.com/v0/"+id+"/Table%201?api_key="+key)
				.then(response => response.json())
				.then(next => {
					next.records
						.map(item => item.fields)
						.map(obj => {
							this.blocks.push({
								id : this.blocks.length,
								title : obj.Name,
								priority : obj.Priorité,
								status : "on-hold"
							});
						});
					for(let i = 0; i < this.blocks.length ; i++){
						for(let j = i+1; j < this.blocks.length; j++){
							if(this.blocks[j].priority > this.blocks[i].priority){
								let tmp = this.blocks[j];
								this.blocks[j] = this.blocks[i];
								this.blocks[i] = tmp;
							}
						}
					}
				})
				.catch(err => console.log(err));
		}
	}

</script>

<style>
	@import './assets/kanban.css';
</style>
