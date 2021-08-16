import Vue from 'vue'
import Vuex, { Store as StoreVuex } from 'vuex'
import { Vuexloquent } from '@/plugin/Vuexloquent';

export class Store {
  static create() {
    Vue.use(Vuex);
    return new StoreVuex({
      plugins:[Vuexloquent.install()],
      strict: true
    })
  }
}
