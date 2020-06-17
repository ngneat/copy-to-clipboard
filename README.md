<p align="center">
 <img width="20%" height="20%" src="./logo.svg">
</p>

<br />

[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
[![ngneat](https://img.shields.io/badge/@-ngneat-383636?style=flat-square&labelColor=8f68d4)](https://github.com/ngneat/)
[![spectator](https://img.shields.io/badge/tested%20with-spectator-2196F3.svg?style=flat-square)]()

> ✂️ Modern copy to clipboard. No Flash.

Simple [module](https://www.npmjs.com/package/copy-to-clipboard) exposing a directive that'll try to use `execCommand` with fallback to IE-specific clipboardData interface and finally, resort to usual prompt with proper text content and message.

## Installation

`ng add @ngneat/copy-to-clipboard`

## Usage

When an element that contains `copyToClipboard` directive is clicked, the value of `copyToClipboard` will be copied into the clipboard.

<!-- prettier-ignore -->
```html
<button copyToClipboard="Copy this text to clipboard">Copy</button>
<button [copyToClipboard]="property">Copy</button>
```

You can add a global function that'll be called on copy:

```ts
import { CopyToClipboardModule, COPY_TO_CLIPBOARD_HANDLER } from '@ngneat/copy-to-clipboard';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CopyToClipboardModule],
  providers: [
    {
      provide: COPY_TO_CLIPBOARD_HANDLER,
      useFactory(toaster: ToasterService) {
        return function(text) {
          toaster.success('Copied..');
        };
      },
      deps: [ToasterService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.netbasal.com/"><img src="https://avatars1.githubusercontent.com/u/6745730?v=4" width="100px;" alt=""/><br /><sub><b>Netanel Basal</b></sub></a><br /><a href="https://github.com/@ngneat/copy-to-clipboard/commits?author=NetanelBasal" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
