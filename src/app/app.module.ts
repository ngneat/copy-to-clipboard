import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CopyToClipboardModule, COPY_TO_CLIPBOARD_HANDLER } from '@ngneat/copy-to-clipboard';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CopyToClipboardModule],
  providers: [
    {
      provide: COPY_TO_CLIPBOARD_HANDLER,
      useFactory() {
        return function(text) {
          alert(`${text} copied!!`);
        };
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
