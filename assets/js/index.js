import { html, tag } from 'taggedjs';
import { dump } from 'taggedjs-dump';
import { stripeList } from './sampleData';
export { tagElement } from 'taggedjs';
export const Dump = tag(() => {
    return html `
    <h3>🔭 TaggedJs Dump</h3>
    <div style="display:flex;align-item:center;justify-content: center;">
      <div style="max-width:900px">
        ${dump({
        value: {
            test: {
                anotherOne: 22
            },
            arrayTest: [{
                    name: 'something',
                    location: { street: '4361' },
                }, {
                    name: 'in this',
                    location: { street: '2235' },
                }, {
                    name: 'world',
                    location: { street: '4785' },
                }]
        }
    })}
        <hr />
        ${dump({
        value: stripeList
    })}
      </div>
    </div>
  `;
});
//# sourceMappingURL=index.js.map