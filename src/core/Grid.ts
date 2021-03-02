import {
  Cell,
  Loc,
  emptyCell,
  hasStructure,
  getDistance,
  Structure,
} from './Cell'
import { Maybe, Nothing } from './types'

export type Grid = Cell[][]

export const findCell = ({ x, y }: Loc) => (grid: Grid): Cell =>
  grid?.[y]?.[x] || emptyCell()

export const validStartingCell = (loc: Loc) => (grid: Grid): Maybe<Cell> => {
  const cell: Cell = findCell(loc)(grid)

  return hasStructure(cell) ? null : cell
}

export const gridToList = (grid: Grid, list: Cell[] = []): Cell[] => {
  const [firstRow, ...tail] = grid

  if (!firstRow) return list
  else return gridToList(tail, [...list, ...firstRow])
}

export const replaceCell = (grid: Grid, newCell: Cell): Grid =>
  grid.map(row =>
    row.map(cell =>
      cell.x === newCell.x && cell.y === newCell.y ? newCell : cell,
    ),
  )

export const distanceToEnemy = (
  grid: Grid,
  loc: Loc,
  playerId: number,
): number =>
  gridToList(grid).reduce((distance, cell) => {
    if (!cell.controlledBy || cell.controlledBy === playerId) return distance

    const newDistance = getDistance(loc)({ x: cell.x, y: cell.y })

    return distance > newDistance ? newDistance : distance
  }, 100)

export const farmCountControlledBy = (grid: Grid, playerId: number): number =>
  grid.reduce(
    (rowCount, row) =>
      rowCount +
      row.reduce(
        (cellCount, cell) =>
          cellCount + (cell.controlledBy === playerId ? cell.farms : 0),
        0,
      ),
    0,
  )

export const townCountControlledBy = (grid: Grid, playerId: number): number =>
  grid.reduce(
    (rowCount, row) =>
      rowCount +
      row.reduce(
        (cellCount, cell) =>
          cellCount +
          (cell.controlledBy !== playerId
            ? 0
            : cell.structure !== Structure.None
            ? 1 + cell.towers
            : 0),
        0,
      ),
    0,
  )
