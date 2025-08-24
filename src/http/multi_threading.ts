// const worker = new Worker(new URL("./worker.ts", import.meta.url).href, {
//   type: "module",
// });

// worker.postMessage({ n: 20 });

// worker.onmessage = (e) => {
//   console.log(`Main thread received: `, e.data);
// };

const numbers = [42, 42, 42, 42, 42];

numbers.forEach((n) => {
  const worker = new Worker(new URL("./worker.ts", import.meta.url).href, {
    type: "module",
  });

  worker.postMessage({ n });

  worker.onmessage = (e) => {
    console.log(`Main thread (n=${n}) received: `, e.data);

    worker.terminate();
  };
});
