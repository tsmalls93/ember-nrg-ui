import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nrg-icon', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{nrg-icon icon='settings'}}`);

    assert.ok(this.$('i').hasClass('settings'));
    assert.ok(this.$('i').hasClass('icon'));
  });
});
