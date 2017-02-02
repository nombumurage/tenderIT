import Ember from 'ember';

export default Ember.Component.extend({

actions:{
  delete(health) {
        if (confirm('Are you sure you want to delete this health?')) {
          this.sendAction('destroyHealth', health);
        }
      },
  delete(agriculture) {
            if (confirm('Are you sure you want to delete this  agriculture?')) {
              this.sendAction('destroyAgriculture',  agriculture);
            }
          },
  delete(it) {
                if (confirm('Are you sure you want to delete this it?')) {
                  this.sendAction('destroyIt', it);
                }
              },
  delete(supply) {
                    if (confirm('Are you sure you want to delete this supply?')) {
                      this.sendAction('destroySupply', supply);
                    }
                  },
    delete(other) {
                        if (confirm('Are you sure you want to delete this other?')) {
                          this.sendAction('destroyOther', other);
                        }
                      },

}

});
