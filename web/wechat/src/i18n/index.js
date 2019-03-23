/**
 *  Created by JingLei on 2019/3/21
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enLocale from './en';
import zhLocale from './zh';
import elementEnLocale from 'element-ui/lib/locale/lang/en';
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'zh',
  messages: {
    en: {
      ...elementEnLocale,
      ...enLocale
    },
    zh: {
      ...elementZhLocale,
      ...zhLocale
    }
  }
});

//  this.$i18n.locale = this.lang;    改变语言状态

export default i18n;
