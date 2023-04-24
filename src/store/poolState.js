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
            console.log(poolUp.id)
            const index = this.pools.findIndex(element => element.id == poolUp.id)
            console.log(index)
            this.pools[index] = poolUp
        },
        deletePool(poolToDelete){
            console.log(poolToDelete)
            const index = this.pools.findIndex(element => element.id == poolToDelete)
            this.pools.splice(index, 1)
        }
    },
    getters: {
        getPools(){
            return this.pools
        }
    }
  });