import { Asset } from "./Asset"

export class News extends Asset {
  title!: string
  description!: string
  date!: Date
}