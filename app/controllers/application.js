import Controller from '@ember/controller'
import { action } from '@ember/object'
import { UploadFile } from 'ember-file-upload'

export default class ApplicationController extends Controller {
  @action
  foo() {
    const file = new File(['foo'], 'foo.txt', { type: 'text/plain' })

    console.log(new UploadFile(file))
  }
}
