import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { CategoryType } from '../../entityTypes/entityTypes';
import { categoryData } from '../../mockData/MockData';

const useCategoriesStore = create(
    combine(
        { categories: [] as CategoryType[] },

        (set) => ({
            // Function to initialize the store with data 
            initializeCategories: () => {
                set({ categories: categoryData });
                return categoryData
            },

            //Function to get category by Id
            getCategoryById: (id: string) => {
                return useCategoriesStore.getState().categories
                    .find((category: CategoryType) => category.Id === id);
            },

        })),
)

export default useCategoriesStore;