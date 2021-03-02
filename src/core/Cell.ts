import { Maybe, Int, Integer, nothing } from './types'

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
  x: Int
  y: Int
}

export type Cell = {
  cellType: CellType
  controlledBy: Maybe<Int>
  defBonus: Int
  structure: Structure
  farms: Int
  towers: Int
  x: Int
  y: Int
}

export const generateCell = (loc: Loc) => (roll: Int): Cell => {
  if (roll <= 12) {
    return {
      cellType: CellType.Plains,
      controlledBy: nothing,
      defBonus: 3n,
      structure: Structure.Town,
      farms: 0n,
      towers: 0n,
      x: loc.x,
      y: loc.y,
    }
  } else if (roll > 12 && roll <= 20) {
    return {
      cellType: CellType.Mountain,
      controlledBy: nothing,
      defBonus: 0n,
      structure: Structure.None,
      farms: 0n,
      towers: 0n,
      x: loc.x,
      y: loc.y,
    }
  } else if (roll > 20 && roll <= 40) {
    return {
      cellType: CellType.Forest,
      controlledBy: nothing,
      defBonus: 1n,
      structure: Structure.None,
      farms: 0n,
      towers: 0n,
      x: loc.x,
      y: loc.y,
    }
  } else {
    return {
      cellType: CellType.Plains,
      controlledBy: nothing,
      defBonus: 0n,
      structure: Structure.None,
      farms: 0n,
      towers: 0n,
      x: loc.x,
      y: loc.y,
    }
  }
}

export const emptyCell = (): Cell => ({
  cellType: CellType.Plains,
  controlledBy: nothing,
  defBonus: 0n,
  structure: Structure.None,
  farms: 0n,
  towers: 0n,
  x: -1n,
  y: -1n,
})

export const hasStructure = (cell: Cell): boolean =>
  cell.structure !== Structure.None

export const buildStructure = (structure: Structure) => (cell: Cell): Cell => ({
  ...cell,
  structure,
  defBonus: 5n,
})

export const getDistance = (from: Loc) => (to: Loc): Int => {
  const x: Int = Integer.abs(from.x - to.x)
  const y: Int = Integer.abs(from.y - to.y)

  return x + y
}
