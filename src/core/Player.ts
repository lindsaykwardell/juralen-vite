import { readonly } from 'vue'
import { Resources } from './Resources'
import { AnalyzerMode } from './Analyzer'
import { TechTree, emptyTechTree } from './TechTree'

export enum PlayerColor {
  Red = 'Red',
  Blue = 'Blue',
  Green = 'Green',
  Orange = 'Orange',
  Teal = 'Teal',
  Purple = 'Purple',
  Yellow = 'Yellow',
  Gray = 'Gray',
  None = '',
}

export const playerColorList = readonly<PlayerColor[]>([
  PlayerColor.Red,
  PlayerColor.Blue,
  PlayerColor.Green,
  PlayerColor.Orange,
  PlayerColor.Teal,
  PlayerColor.Purple,
  PlayerColor.Yellow,
  PlayerColor.Gray,
])

export const playerColorClass = (color: PlayerColor): string => {
  switch (color) {
    case PlayerColor.Red:
      return 'bg-player-red'
    case PlayerColor.Blue:
      return 'bg-player-blue'
    case PlayerColor.Green:
      return 'bg-player-green'
    case PlayerColor.Orange:
      return 'bg-player-orange'
    case PlayerColor.Teal:
      return 'bg-player-teal'
    case PlayerColor.Yellow:
      return 'bg-player-yellow'
    case PlayerColor.Purple:
      return 'bg-player-purple'
    case PlayerColor.None:
    default:
      return ''
  }
}

export const isDark = (color: PlayerColor): boolean => {
  switch (color) {
    case PlayerColor.Red:
      return true
    case PlayerColor.Blue:
      return true
    case PlayerColor.Green:
      return false
    case PlayerColor.Orange:
      return true
    case PlayerColor.Teal:
      return false
    case PlayerColor.Yellow:
      return false
    case PlayerColor.Purple:
      return true
    case PlayerColor.None:
    default:
      return false
  }
}

export type Player = {
  id: number
  name: string
  resources: Resources
  hasLost: boolean
  isHuman: boolean
  analyzer: AnalyzerMode
  color: PlayerColor
  score: number
  techTree: TechTree
}

export type NewPlayer = {
  id: number
  name: string
  isHuman: boolean
  analyzer: AnalyzerMode
  color: PlayerColor
}

export const generatePlayer = (newPlayer: NewPlayer, id: number): Player => ({
  id,
  name: newPlayer.name,
  resources: {
    actions: 1,
    gold: 2,
  },
  hasLost: false,
  isHuman: newPlayer.isHuman,
  analyzer: newPlayer.analyzer,
  color: newPlayer.color,
  score: 2,
  techTree: emptyTechTree(),
})

export const revertToNewPlayer = (player: Player): NewPlayer => ({
  id: player.id,
  name: player.name,
  isHuman: player.isHuman,
  analyzer: player.analyzer,
  color: player.color,
})

export const emptyPlayer = () => ({
  id: -1,
  name: '',
  resources: {
    actions: -1,
    gold: -1,
  },
  hasLost: true,
  isHuman: false,
  analyzer: AnalyzerMode.Default,
  color: PlayerColor.None,
  score: 0,
  techTree: emptyTechTree(),
})

export const getPlayer = (id: number) => (players: Player[]): Player =>
  players.find(player => player.id === id) || emptyPlayer()
