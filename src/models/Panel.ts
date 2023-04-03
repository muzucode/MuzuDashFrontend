import { News } from "./News"
import { Stock } from "./Stock"

export class Panel {
  private title!: string
  private 'type'!: string
  private asset!: Stock | News
}