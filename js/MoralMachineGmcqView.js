import McqView from 'components/adapt-contrib-mcq/js/McqView';

class MoralMachineGmcqView extends McqView {

  onQuestionRendered() {
    this.$('.js-item-label').imageready(() => this.setReadyStatus());
  }

}

MoralMachineGmcqView.template = 'gmcq.jsx';

export default MoralMachineGmcqView;
