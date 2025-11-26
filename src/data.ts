// src/data.ts
import type { ICard } from "./types";
// 简单的 UUID 生成器
const uuid = (): string => Math.random().toString(36).substring(2, 15);

export const initialHand: ICard[] = [
  { id: uuid(), suit: '♠', rank: 'A', color: 'black' },
  { id: uuid(), suit: '♠', rank: '2', color: 'black' },
  { id: uuid(), suit: '♥', rank: '10', color: 'red' },
  { id: uuid(), suit: '♥', rank: 'J', color: 'red' },
  { id: uuid(), suit: '♥', rank: 'Q', color: 'red' },
  { id: uuid(), suit: '♣', rank: '5', color: 'green' },
  { id: uuid(), suit: '♣', rank: '6', color: 'blue' },
  { id: uuid(), suit: '♣', rank: '7', color: 'black' },
  { id: uuid(), suit: '♦', rank: 'K', color: 'red' },
  { id: uuid(), suit: '♦', rank: '3', color: 'blue' },
  { id: uuid(), suit: '♠', rank: '9', color: 'black' },
  { id: uuid(), suit: '♥', rank: '2', color: 'red' },
  { id: uuid(), suit: 'JOKER', rank: 'JOKER', color: 'purple' },
];