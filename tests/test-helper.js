import Application from 'ember-file-upload-bug-demo/app'
import config from 'ember-file-upload-bug-demo/config/environment'
import * as QUnit from 'qunit'
import { setApplication } from '@ember/test-helpers'
import { setup } from 'qunit-dom'
import { start } from 'ember-qunit'

setApplication(Application.create(config.APP))

setup(QUnit.assert)

start()
