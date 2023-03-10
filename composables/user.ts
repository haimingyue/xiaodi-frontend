import { defineStore } from 'pinia'

export const useUser = defineStore('user', () => {
    let count = ref(1)

    const add = () => {
        count.value++;
    }

    const multiplyCount = computed(() => {
        return count.value * 2
    })

    return {
        count,
        add,
        multiplyCount
    }
},
// 持久化存储
{
    persist: true
})