export const pipe = (...fns: Array<(input: any) => any>) => <T>(data: T): any =>
  fns.reduce((data, fn) => fn(data), data)

export type Nothing = null | undefined
export const nothing: Nothing = null

export type Maybe<T> = T | Nothing
export type Int = bigint
export const Integer = {
  abs: (x: Int): Int => pipe(Number, Math.round, BigInt)(x) as Int,
}

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
