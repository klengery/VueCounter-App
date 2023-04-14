import { defineStore } from 'pinia';

export const poolStore = defineStore('pool', {
    state: () => ({
        pools: []
    }),
    actions: {
        setPool(value){
            this.pools = value
        },
        newPool(newPool){
            this.pools.push(newPool)
        }
    },
    getters: {
        getPools(){
            return this.pools
        }
    }
  });