# Bug Demo for ember-file-upload

This is a demo repo for the issue [adopted-ember-addons/ember-file-upload#929](https://github.com/adopted-ember-addons/ember-file-upload/issues/929).

### Reproduction

1. `npm install`
2. `ember serve`
3. Navigate to http://localhost:4200/ or http://localhost:4200/tests/

Error:

```
Uncaught Error: Could not find module `miragejs` imported from `ember-file-upload`
```

See `controllers/application.js` for the code causing the issue:

```js
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
```
