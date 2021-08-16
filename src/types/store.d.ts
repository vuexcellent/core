import { Store } from 'vuex';

declare module 'vuex/types/index' {
  interface Store<S> {
    $repository(): void
  }
}
