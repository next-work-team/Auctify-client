import { create } from 'zustand';

import { TemperatureState } from './temperatureStoreTypes';

export const useTemperatureStore = create<TemperatureState>((set) => ({
  temperature: 36.5,
  setTemperature: (temp) => set({ temperature: temp }),
}));
