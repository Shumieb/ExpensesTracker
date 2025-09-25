import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { CategoryType } from '../../entityTypes/entityTypes';
import { getAllCategories } from '../../clients/supabaseClient';

const useCategoriesStore = create(
    combine(
        { categories: [] as CategoryType[] },

        (set) => ({
            // Function to initialize the store with data 
            initializeCategories: async () => {
                if (useCategoriesStore.getState().categories.length < 1) {
                    // get data from database
                    let data = await getAllCategories()
                    if (data) {
                        // set state
                        set({ categories: data });
                        return data
                    }
                } else {
                    // return state data
                    return useCategoriesStore.getState().categories
                }
            },

            //Function to get category by Id
            getCategoryById: (id: number) => {
                return useCategoriesStore.getState().categories
                    .find((category: CategoryType) => category.id === id);
            },

        })),
)

export default useCategoriesStore;