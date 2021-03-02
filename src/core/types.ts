export type Nothing = null | undefined

export type Maybe<T> = T | Nothing

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
