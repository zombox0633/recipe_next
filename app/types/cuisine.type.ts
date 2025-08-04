import { TrackingType } from "./type"

export type CuisineType = {
  id: string
  name: string
  imageUrl: string
  category: CategoryCuisineType
  ingredients: string
  instructions: string
  reference?: string
} & TrackingType

export type CategoryCuisineType = {
  id: string
  name: string
  subCategory: string
} & TrackingType
