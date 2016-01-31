'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }
  /**
   * [summartyAction description]
   * @return {[type]} [description]
   */
  async summaryAction(){
    let model = this.model('post');
    let allCountPromise = model.getCount();
    let userCountPromise = model.getCount(this.userInfo.id);
    let latestPromise = model.getLatest();
    let [allCount, userCount, latest] = await Promise.all([allCountPromise, userCountPromise, latestPromise]);
    return this.success({
      allCount,
      userCount,
      latest
    })
  }
}