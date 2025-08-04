export type CategoriesPageType = {
  name: string
  link: string
}

export const categories: CategoriesPageType[] = [
  {
    name: 'All',
    link: '/categories/all'
  },
  {
    name: 'My Recipe',
    link: '/categories/my_recipe'
  },
]