export type Maybe<T> = T | Nothing

export type Nothing = null | undefined

export enum GameStatus {
  NoGame,
  ActiveGame,
  CompletedGame,
}

export enum CombatStatus {
  NoCombat,
  Combat,
}

export enum UpgradeType {
  BuildFarm,
  BuildTower,
  RepairDefense,
}

