import { RootState } from '../../../redux/store';
export const selectGifs = (state: RootState) => state.gifStore.gifs;