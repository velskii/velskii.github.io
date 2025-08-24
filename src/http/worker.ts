// @ts-nocheck no types available
function fibonacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

self.onmessage = (e) => {
  const { n } = e.data;
  const result = fibonacci(n);

  // Send the result back to the main thread
  self.postMessage(result);

  // Close the worker
  self.close();
};
