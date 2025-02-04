export interface FavoriteProviderProps {
    children : React.ReactNode
}
export interface FavoriteContextType {
    favorites: QuranSurah[];
    toggleFavorite: (surah: QuranSurah) => void;
  }