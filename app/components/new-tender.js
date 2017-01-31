import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      tenderFormShow() {
        this.set('addNewTender', true);
      },

    saveAgriculture1(){
      var params={
      companyname:this.get('companyname'),
        details:this.get('details'),
        tender_no:this.get('tender_no'),
        open_dates:this.get('open_dates'),
        close_dates:this.get('close_dates'),
        downloads:0
      };
      this.set('addNewTender', false);
      this.sendAction('saveAgriculture2', params);
    }
  }

});
