export type Resources = {
  actions: number
  gold: number
}

export const emptyResources = (): Resources => ({
  actions: 0,
  gold: 0,
})

export const spendGold = (cost: number) => (
  resources: Resources,
): Resources => ({ ...resources, gold: resources.gold - cost })

export const useActions = (cost: number) => (
  resources: Resources,
): Resources => ({
  ...resources,
  actions: resources.actions - cost,
})
