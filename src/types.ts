// src/types.ts

export type Suit = '♠' | '♥' | '♣' | '♦' | 'JOKER';
export type CardColor = 'red' | 'black' | 'purple' | 'green' | 'blue';

export interface ICard {
  id: string;
  suit: Suit;
  rank: string;
  color: CardColor;
}