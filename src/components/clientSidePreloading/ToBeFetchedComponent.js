import MyLoadable from '../loadableHOC/MyLoadable';

export const LoadableMyComponent = MyLoadable({
    loader: () => import('./StupidComponent')
});