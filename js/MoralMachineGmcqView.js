import McqView from 'components/adapt-contrib-mcq/js/McqView';

class MoralMachineGmcqView extends McqView {

  onQuestionRendered() {
    this.$('.js-item-label').imageready(() => this.setReadyStatus());
  }
  onIsCompleteChange(model, isComplete) {
    this.$('.btn__action').html(model.get('_buttons')["_reset"]["buttonText"]);
  }

}

MoralMachineGmcqView.template = 'gmcq.jsx';

export default MoralMachineGmcqView;
