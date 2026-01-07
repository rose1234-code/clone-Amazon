import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesState{
    selectedFavoriteIds:number[];
    toggleHeartIcon:(id:number)=>void,
    clearAll:()=>void
}


export  const useStoreFavorite=create <FavoritesState> ()(
    persist((set,get)=>({
        selectedFavoriteIds:[],

        toggleHeartIcon:(id)=>{

            const favorite=get().selectedFavoriteIds
            set({selectedFavoriteIds:favorite.includes(id)  ? favorite.filter(favId =>favId !== id): [...favorite,id]})
        },
        clearAll:()=>set({selectedFavoriteIds:[]})
    }),{
        name:'favorite-store'
    })
)