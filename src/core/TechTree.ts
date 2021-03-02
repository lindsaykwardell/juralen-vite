import { Maybe, nothing } from './types'

export enum LevelOne {
  BuildFarms = 'BuildFarms',
  BuildTowers = 'BuildTowers',
}

export enum LevelTwo {
  BuildWarriors = 'BuildWarriors',
  BuildArchers = 'BuildArchers',
}

export enum LevelThree {
  BuildKnights = 'BuildKnights',
  BuildRogues = 'BuildRogues',
}

export enum LevelFour {
  BuildWizards = 'BuildWizards',
  BuildPriests = 'BuildPriests',
}

export enum TechLevel {
  LevelOne,
  LevelTwo,
  LevelThree,
  LevelFour,
}

export type TechTree = {
  levelOne: Maybe<LevelOne>
  levelTwo: Maybe<LevelTwo>
  levelThree: Maybe<LevelThree>
  levelFour: Maybe<LevelFour>
}

export const emptyTechTree = () => ({
  levelOne: nothing,
  levelTwo: nothing,
  levelThree: nothing,
  levelFour: nothing,
})

export const getTechCost = (level: TechLevel): number => {
  switch (level) {
    case TechLevel.LevelOne:
      return 3
    case TechLevel.LevelTwo:
      return 5
    case TechLevel.LevelThree:
      return 8
    case TechLevel.LevelFour:
      return 13
  }
}

type TechDescription = {
  name: string
  description: string
}

const techDescription: { [key: string]: TechDescription } = {
  [LevelOne.BuildFarms]: {
    name: 'Build Farms',
    description: 'Build more farms in your towns and citadel.',
  },
  [LevelOne.BuildTowers]: {
    name: 'Build Towers',
    description: 'Build towers to generate more actions.',
  },
  [LevelTwo.BuildWarriors]: {
    name: 'Build Warriors',
    description: 'Advanced unit that deals more damage.',
  },
  [LevelTwo.BuildArchers]: {
    name: 'Build Archers',
    description: 'Advanced unit that attacks at range.',
  },
  [LevelThree.BuildKnights]: {
    name: 'Build Knights',
    description: 'Mobile unit that deals high damage.',
  },
  [LevelThree.BuildRogues]: {
    name: 'Build Rogues',
    description: 'Advanced unit with high damage, but is weaker.',
  },
  [LevelFour.BuildWizards]: {
    name: 'Build Wizards',
    description: 'Advanced unit with lower movement cost.',
  },
  [LevelFour.BuildPriests]: {
    name: 'Build Priests',
    description: 'Advanced unit that heals other units over time.',
  },
}

export type TechDetails = TechDescription & {
  cost: number
  level: TechLevel
  tech: LevelOne | LevelTwo | LevelThree | LevelFour
}

export const getTechLevelDetails = (
  level: TechLevel,
): [TechDetails, TechDetails] => {
  const cost = getTechCost(level)

  switch (level) {
    case TechLevel.LevelOne:
      return [
        {
          ...techDescription[LevelOne.BuildFarms],
          cost,
          level,
          tech: LevelOne.BuildFarms,
        },
        {
          ...techDescription[LevelOne.BuildTowers],
          cost,
          level,
          tech: LevelOne.BuildTowers,
        },
      ]
    case TechLevel.LevelTwo:
      return [
        {
          ...techDescription[LevelTwo.BuildWarriors],
          cost,
          level,
          tech: LevelTwo.BuildWarriors,
        },
        {
          ...techDescription[LevelTwo.BuildArchers],
          cost,
          level,
          tech: LevelTwo.BuildArchers,
        },
      ]
    case TechLevel.LevelThree:
      return [
        {
          ...techDescription[LevelThree.BuildKnights],
          cost,
          level,
          tech: LevelThree.BuildKnights,
        },
        {
          ...techDescription[LevelThree.BuildRogues],
          cost,
          level,
          tech: LevelThree.BuildRogues,
        },
      ]
    case TechLevel.LevelFour:
      return [
        {
          ...techDescription[LevelFour.BuildWizards],
          cost,
          level,
          tech: LevelFour.BuildWizards,
        },
        {
          ...techDescription[LevelFour.BuildPriests],
          cost,
          level,
          tech: LevelFour.BuildPriests,
        },
      ]
  }
}
