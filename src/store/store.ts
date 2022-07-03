import { Store } from 'pullstate';

export const GlobalStore = new Store({
    isDrawerOpen: false,
    isDataFetching: true
});
