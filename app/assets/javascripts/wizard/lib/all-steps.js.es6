const STEPS = [{
  id: 'welcome',
}];

export function findStep(id) {
  return STEPS.findProperty('id', id);
}
