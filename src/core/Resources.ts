import { Int } from './types'

export type Resources = {
  actions: number
  gold: Int
}

export const emptyResources = (): Resources => ({
  actions: 0,
  gold: 0n,
})

export const spendGold = (cost: Int) => (
  resources: Resources,
): Resources => ({ ...resources, gold: resources.gold - cost })

export const useActions = (cost: number) => (
  resources: Resources,
): Resources => ({
  ...resources,
  actions: resources.actions - cost,
})
