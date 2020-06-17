import { InjectionToken } from '@angular/core';

export const COPY_TO_CLIPBOARD_HANDLER = new InjectionToken('COPY_TO_CLIPBOARD_HANDLER');
export type CopyConfig = {
  message?: string;
  onCopy?: (clipboardData: object) => void;
  format?: string;
};
