import { Asset } from "./Asset"

export class Stock extends Asset {
  company!: string
  ticker!: string
  price!: number
}