import { Vue } from 'nuxt-property-decorator';
import { VuetifyObject } from 'vuetify';


export type PostState = 0 | 1 | 2

export class MyVue extends Vue {
  $axios;

  $moment;

  $router;

  $vuetify: VuetifyObject;

  $v: any;

  $twttr;
}

export namespace PostStatuses {
  export const open  = 0;
  export const close = 1;
  export const erted = 2;
}

export namespace Eth {
  export const networkId: { [ networkId: number ]: string } = {
    0:  '未設定',
    1:  'Mainnet',
    3:  'Ropsten',
    4:  'Rinkeby',
    42: 'Kovan'
  };
}

export type SNS = 'twitter';
