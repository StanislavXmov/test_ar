import { create } from 'zustand';

interface PositionState {
  x: number;
  y: number;
  z: number;
  setX: (n: number) => void;
  setY: (n: number) => void;
  setZ: (n: number) => void;
}

export const usePosition = create<PositionState>((set) => ({
  x: 0,
  y: 0,
  z: 0,
  setX: n => set({x: n}),
  setY: n => set({y: n}),
  setZ: n => set({z: n}),
}));