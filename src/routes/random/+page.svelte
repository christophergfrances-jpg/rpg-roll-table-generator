<script>
  import { faker } from '@faker-js/faker';
  import { browser } from '$app/environment';

  const useLocalStorage = false;
  const breakLimit = 5000;

  function setStorage(key, value) {
    if (browser) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }
  function getFromStorage(key) {
    if(!useLocalStorage) return null;
    if (browser) {
      try {
        return JSON.parse(window.localStorage.getItem(key));
      } catch(e) {
        console.log(e);
      }
    }
    return null;
  }
  let k = '';
  let e = '';
  let n = '';
  const ks = new Set();
  if (getFromStorage('ks')) {
    const kstore = getFromStorage('ks');
    for (let i = 0; i < kstore.length; i++) {
      ks.add(kstore[i]);
    }
  }
  const es = new Set();
  if (getFromStorage('es')) {
    es.add(...getFromStorage('es'));
    const estore = getFromStorage('es');
    for (let i = 0; i < estore.length; i++) {
      es.add(estore[i]);
    }
  }
  const ns = new Set();
  if (getFromStorage('ns')) {
    ns.add(...getFromStorage('ns'));
    const nstore = getFromStorage('ns');
    for (let i = 0; i < nstore.length; i++) {
      ns.add(nstore[i]);
    }
  }
  
  let breakK = 0;
  let breakE = 0;
  let breakN = 0;
  while (k.charAt(0) !== 'k') {
    k = faker.word.words({ count: 1 });
    if (breakK++ > breakLimit) {
      console.log(`breaker limit triggered for k on ${k}`);
      break;
    }
  }
  if (k.charAt(0) === 'k') {
    ks.add(k);
    setStorage('ks', [...ks]);
  }
  while (e.charAt(0) !== 'e') {
    e = faker.word.words({ count: 1 });
    // console.log(e);
    if (breakE++ > breakLimit) {
      console.log(`breaker limit triggered for e on ${e}`);
      break;
    }
  }
  if (e.charAt(0) === 'e') {
    es.add(e);
    setStorage('es', [...es]);
  }
  while (n.charAt(0) !== 'n') {
    n = faker.word.words({ count: 1 });
    if (breakN++ > breakLimit) {
      console.log(`breaker limit triggered for n on ${n}`);
      break;
    }
  }
  if (n.charAt(0) === 'n') {
    ns.add(n);
    setStorage('ns', [...ns]);
  }
</script>

<h1>Random</h1>
<p>K.E.N. can stand for: </p>
<ol>
  {#each ks as ak}
    {#each es as ae}
      {#each ns as an}
        <li>
          {ak}
          {ae}
          {an}
        </li>
        {/each}
      {/each}
    {/each}
</ol>
