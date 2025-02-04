export interface FavoriteProviderProps {
    children : React.ReactNode
}
export interface FavoriteContextType {
    favorites: QuranSurah[];
    handleFavorites: (surah: QuranSurah) => void;
  }