import { defineStore } from 'pinia';
import pool from './pool';

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
            console.log('the state was update')
            console.log(this.pools)
        },
        updatePool(poolUp){
            const idx = this.pools.map(r => r.id).indexOf(this.pools.id)
            console.log(idx)
            this.pools[idx] = poolUp
        }
    },
    getters: {
        getPools(){
            return this.pools
        }
    }
  });