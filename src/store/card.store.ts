import {create} from 'zustand'
import { persist } from 'zustand/middleware'

interface CardStoreProps{
    selectedCardIds:number[],
    toggleCardIcon:(id:number)=>void,
    clearAll:()=>void
}

export const   useStoreCard=create<CardStoreProps>()(
    persist((set,get)=>({
        selectedCardIds:[],
        toggleCardIcon:(id)=>{
            const favCard=get().selectedCardIds
            set({selectedCardIds:favCard.includes(id)? favCard.filter(favId=>favId!==id):[...favCard,id]})
        },
        clearAll:()=>set({selectedCardIds:[]})

    }),{name:'card-storage'})
)