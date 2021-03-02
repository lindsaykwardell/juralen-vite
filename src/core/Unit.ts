import { Int } from './types'

export enum UnitType {
  Soldier = 'Soldier',
  Warrior = 'Warrior',
  Archer = 'Archer',
  Knight = 'Knight',
  Rogue = 'Rogue',
  Wizard = 'Wizard',
  Priest = 'Priest',
}

export type UnitInitialValues = {
  movesLeft: Int
  attack: Int
  health: Int
  range: Int
}

export const unitCost = (unitType: UnitType): Int => {
  switch (unitType) {
    case UnitType.Soldier:
      return 1n
    case UnitType.Warrior:
      return 2n
    case UnitType.Archer:
      return 2n
    case UnitType.Knight:
      return 4n
    case UnitType.Rogue:
      return 4n
    case UnitType.Wizard:
      return 6n
    case UnitType.Priest:
      return 6n
  }
}

export const unitMoveCost = (unitType: UnitType): number =>
  unitType === UnitType.Wizard ? 0.25 : 1

export const unitThreat = (unitType: UnitType): Int => {
  switch (unitType) {
    case UnitType.Soldier:
      return 1n
    case UnitType.Warrior:
      return 2n
    case UnitType.Archer:
      return 2n
    case UnitType.Knight:
      return 3n
    case UnitType.Rogue:
      return 3n
    case UnitType.Wizard:
      return 4n
    case UnitType.Priest:
      return 4n
  }
}

export const shortUnitType = (unitType: UnitType): string => {
  switch (unitType) {
    case UnitType.Soldier:
      return 'So'
    case UnitType.Warrior:
      return 'Wa'
    case UnitType.Archer:
      return 'Ar'
    case UnitType.Knight:
      return 'Kn'
    case UnitType.Rogue:
      return 'Ro'
    case UnitType.Wizard:
      return 'Wi'
    case UnitType.Priest:
      return 'Pr'
  }
}

export const unitInitialValues = (unitType: UnitType): UnitInitialValues => {
  switch (unitType) {
    case UnitType.Soldier:
      return {
        movesLeft: 1n,
        attack: 1n,
        health: 2n,
        range: 1n,
      }
    case UnitType.Warrior:
      return {
        movesLeft: 1n,
        attack: 2n,
        health: 2n,
        range: 1n,
      }
    case UnitType.Archer:
      return {
        movesLeft: 1n,
        attack: 1n,
        health: 3n,
        range: 2n,
      }
    case UnitType.Knight:
      return {
        movesLeft: 2n,
        attack: 2n,
        health: 3n,
        range: 1n,
      }
    case UnitType.Rogue:
      return {
        movesLeft: 2n,
        attack: 3n,
        health: 2n,
        range: 1n,
      }
    case UnitType.Wizard:
      return {
        movesLeft: 3n,
        attack: 3n,
        health: 3n,
        range: 2n,
      }
    case UnitType.Priest:
      return {
        movesLeft: 1n,
        attack: 1n,
        health: 5n,
        range: 1n,
      }
  }
}
