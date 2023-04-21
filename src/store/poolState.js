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
            console.log(this.pools)
            console.log(poolUp.id)
            this.pools.forEach(element => {
                // console.log(element.id)
                if(element.id == poolUp.id)
                this.pools[element] = poolUp
            });
        }
    },
    getters: {
        getPools(){
            return this.pools
        }
    }
  });