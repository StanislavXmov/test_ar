import { WebGLRenderer } from 'three';
import { create } from 'zustand';

interface GlState {
  gl: WebGLRenderer | undefined;
  setGl: (gl: WebGLRenderer) => void;
}

export const useGL = create<GlState>((set) => ({
  gl: undefined,
  setGl: (gl) => set({gl}),
}));