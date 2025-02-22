import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createUiKey } from '../src';

const App: React.FC = () => {
  return (
    <main>
      <section>
        <h2>
          <code>createUiKey</code>
        </h2>{' '}
        <p>
          Helper intended to create render-friendly keys. The keys generated can
          be used for uniquely identifying resources, caching, testing among
          other purposes.
        </p>
        <p>
          You can obtain the segments of the key doing the reverse process via{' '}
          <code>parseUiKey</code>.
        </p>
        <table>
          <thead>
            <tr>
              <th>Use Case</th>
              <th>Generated Key</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <pre>
                  <code>createUiKey('user')</code>
                </pre>
              </th>
              <th>
                <pre>
                  <code>{createUiKey(['user'])}</code>
                </pre>
              </th>
            </tr>
            <tr>
              <th>
                <pre>
                  <code>createUiKey(['user', '1'])</code>
                </pre>
              </th>
              <th>
                <pre>
                  <code>{createUiKey(['user', '1'])}</code>
                </pre>
              </th>
            </tr>
            <tr>
              <th>
                <pre>
                  <code>createUiKey(['user', '1', "admin"])</code>
                </pre>
              </th>
              <th>
                <pre>
                  <code>{createUiKey(['user', '1', 'admin'])}</code>
                </pre>
              </th>
            </tr>
            <tr>
              <th>
                <pre>
                  <code>createUiKey(['user', '1', 'admin', false])</code>
                </pre>
              </th>
              <th>
                <pre>
                  <code>{createUiKey(['user', '1', 'admin', false])}</code>
                </pre>
              </th>
            </tr>
            <tr>
              <th>
                <pre>
                  <code>
                    createUiKey([&#123; id: '1', name: 'John Doe' &#125;])
                  </code>
                </pre>
              </th>
              <th>
                <pre>
                  <code>{createUiKey([{ id: '1', name: 'John Doe' }])}</code>
                </pre>
              </th>
            </tr>
            <tr>
              <th>
                <pre>
                  <code>createUiKey(['user', ['admin', 'founder']])</code>
                </pre>
              </th>
              <th>
                <pre>
                  <code>{createUiKey(['user', ['admin', 'founder']])}</code>
                </pre>
              </th>
            </tr>
            <tr>
              <th>
                <pre>
                  <code>
                    createUiKey(['user', ['admin', 'founder'], &#123; id: '1',
                    name: 'John Doe' &#125;])
                  </code>
                </pre>
              </th>
              <th>
                <pre>
                  <code>
                    {createUiKey([
                      'user',
                      ['admin', 'founder'],
                      { id: '1', name: 'John Doe' },
                    ])}
                  </code>
                </pre>
              </th>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
