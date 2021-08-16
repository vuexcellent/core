import { Store } from 'vuex';
import '@/types/store.d.ts';
export class Vuexloquent {
  static install() {
    return (store: Store<any>) => {
      this.hydrate(store);
    }
  }

  protected static hydrate(store: Store<any>) {
    this.helpers(store);
  }

  protected static helpers(store: Store<any>): any {
    store.$repository = function() {console.log('Hello!!!')}
  }
}
