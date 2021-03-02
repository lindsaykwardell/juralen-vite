import { Maybe } from './types'

export enum CellType {
  Plains = 'Plains',
  Forest = 'Forest',
  Mountain = 'Mountain',
}

export enum Structure {
  Town = 'Town',
  Citadel = 'Citadel',
  None = '',
}

export type Loc = {
  x: number
  y: number
}

export type Cell = {
  cellType: CellType
  controlledBy: Maybe<number>
  defBonus: number
  structure: Structure
  farms: number
  towers: number
  x: number
  y: number
}

export const generateCell = (loc: Loc) => (roll: number): Cell => {
  if (roll <= 12) {
    return {
      cellType: CellType.Plains,
      controlledBy: null,
      defBonus: 3,
      structure: Structure.Town,
      farms: 0,
      towers: 0,
      x: loc.x,
      y: loc.y,
    }
  } else if (roll > 12 && roll <= 20) {
    return {
      cellType: CellType.Mountain,
      controlledBy: null,
      defBonus: 0,
      structure: Structure.None,
      farms: 0,
      towers: 0,
      x: loc.x,
      y: loc.y,
    }
  } else if (roll > 20 && roll <= 40) {
    return {
      cellType: CellType.Forest,
      controlledBy: null,
      defBonus: 1,
      structure: Structure.None,
      farms: 0,
      towers: 0,
      x: loc.x,
      y: loc.y,
    }
  } else {
    return {
      cellType: CellType.Plains,
      controlledBy: null,
      defBonus: 0,
      structure: Structure.None,
      farms: 0,
      towers: 0,
      x: loc.x,
      y: loc.y,
    }
  }
}

export const emptyCell = (): Cell => ({
  cellType: CellType.Plains,
  controlledBy: null,
  defBonus: 0,
  structure: Structure.None,
  farms: 0,
  towers: 0,
  x: -1,
  y: -1,
})

export const hasStructure = (cell: Cell): boolean =>
  cell.structure !== Structure.None

export const buildStructure = (structure: Structure) => (cell: Cell): Cell => ({
  ...cell,
  structure,
  defBonus: 5,
})

export const getDistance = (from: Loc) => (to: Loc): number => {
  const x: number = Math.abs(from.x - to.x)
  const y: number = Math.abs(from.y - to.y)

  return x + y
}
