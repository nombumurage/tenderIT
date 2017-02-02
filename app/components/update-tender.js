import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateTenderForm() {
      this.set('updateTenderForm', true);
    },
    update(agriculture) {
      var params = {
      companyname: this.get('companyname'),
        details: this.get('details'),
          tender_no: this.get('tender_no'),
            open_dates: this.get('open_dates'),
                close_dates: this.get('close_dates')

      };
      this.set('updateTenderForm', false);
      this.sendAction('update', agriculture, params);
    },
    update(health) {
      var params = {
      companyname: this.get('companyname'),
      details: this.get('details'),
          tender_no: this.get('tender_no'),
              open_dates: this.get('open_dates'),
                close_dates: this.get('close_dates')

      };
      this.set('updateTenderForm', false);
      this.sendAction('update', health, params);
    },
    update(supply) {
      var params = {
      companyname: this.get('companyname'),
    details: this.get('details'),
            tender_no: this.get('tender_no'),
              open_dates: this.get('open_dates'),
            close_dates: this.get('close_dates')

      };
      this.set('updateTenderForm', false);
      this.sendAction('update', supply, params);
    },
    update(it) {
      var params = {
        companyname: this.get('companyname'),
      details: this.get('details'),
          tender_no: this.get('tender_no'),
              open_dates: this.get('open_dates'),
                close_dates: this.get('close_dates')

      };
      this.set('updateTenderForm', false);
      this.sendAction('update', it, params);
    },
    update(other) {
      var params = {
        companyname: this.get('companyname'),
      details: this.get('details'),
            tender_no: this.get('tender_no'),
            open_dates: this.get('open_dates'),
                close_dates: this.get('close_dates')

      };
      this.set('updateTenderForm', false);
      this.sendAction('update', other, params);
    }
  }
});
