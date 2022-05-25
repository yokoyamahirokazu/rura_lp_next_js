import Document, { Html, Head, Main, NextScript } from 'next/document';
import React, { ReactElement } from 'react';

import { config } from '@site.config';

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang='ja'>
        <Head></Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${config.gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
