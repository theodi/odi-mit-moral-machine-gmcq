import Adapt from 'core/js/adapt';
import MoralMachineGmcqView from './MoralMachineGmcqView';
import MoralMachineGmcqModel from './MoralMachineGmcqModel';

export default Adapt.register('moral-machine-gmcq', {
  model: MoralMachineGmcqModel,
  view: MoralMachineGmcqView
});
