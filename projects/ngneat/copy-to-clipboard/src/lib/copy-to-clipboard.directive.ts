import { Directive, Input, HostListener, Optional, Inject } from '@angular/core';
import copy from 'copy-to-clipboard';
import { CopyConfig, COPY_TO_CLIPBOARD_HANDLER } from './tokens';

@Directive({
  selector: '[copyToClipboard]'
})
export class CopyToClipboardDirective {
  @Input('copyToClipboard') text: string;

  @Input('copyToClipboardOptions') options: CopyConfig = {};

  constructor(@Optional() @Inject(COPY_TO_CLIPBOARD_HANDLER) private globalOnCopy) {}

  @HostListener('click')
  copy() {
    copy(this.text, {
      onCopy: (clipboardData: object) => {
        this.globalOnCopy?.(this.text, clipboardData);
      },
      ...this.options
    });
  }
}
