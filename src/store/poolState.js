import { defineStore } from 'pinia';

export const poolStore = defineStore('pool', {
    state: () => ({
        pools: []
    }),
    actions: {
        setPool(value){
            this.pools = value
        }
    },
    getters: {
        getPools(){
            return this.pools
        }
    }
  });