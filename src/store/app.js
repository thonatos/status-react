import { observable, computed, action } from 'mobx'
import { persist } from 'mobx-persist'

import { zh_CN, en_US } from '~/locales/'
import antd_en_US from 'antd/lib/locale-provider/en_US'

class State {
  @persist
  @observable
  locale = 'en_us'

  @observable
  menus = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Images',
      href: '/images',
    },
    {
      name: 'Clusters',
      href: '/clusters',
    },
    {
      name: 'Trends',
      href: '/trends',
    },
  ]

  constructor(root) {
    this.root = root
  }

  @computed
  get langs() {
    return this.locale === 'zh_cn' ? zh_CN : en_US
  }

  @computed
  get langsAntd() {
    return this.locale === 'zh_cn' ? null : antd_en_US
  }

  @action
  changeLanguageTo = lang => {
    this.locale = lang
  }
}

export default State
