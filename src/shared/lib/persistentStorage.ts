// URL + localStorage를 동시에 다루는 커스텀 storage 유틸
import { StateStorage } from 'zustand/middleware';

export const getUrlSearch = () =>
  typeof window !== 'undefined' ? window.location.search.slice(1) : '';

export const persistentStorage: StateStorage = {
  getItem: (key): string => {
    const searchParams = new URLSearchParams(getUrlSearch());
    const storedValue = searchParams.get(key);
    return storedValue || localStorage.getItem(key) || 'null';
  },
  setItem: (key, newValue): void => {
    if (typeof window === 'undefined') return;
    const searchParams = new URLSearchParams(getUrlSearch());
    searchParams.set(key, newValue);
    window.history.replaceState(null, '', `?${searchParams.toString()}`);
    localStorage.setItem(key, newValue);
  },
  removeItem: (key): void => {
    if (typeof window === 'undefined') return;
    const searchParams = new URLSearchParams(getUrlSearch());
    searchParams.delete(key);
    window.history.replaceState(null, '', `?${searchParams.toString()}`);
    localStorage.removeItem(key);
  },
};
