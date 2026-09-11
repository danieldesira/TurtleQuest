export const registerServiceWorker = async (workerType: "cache") => {
  if (navigator.serviceWorker) {
    const worker = await navigator.serviceWorker.register(
      `${workerType}ServiceWorker.js`,
    );
    console.log(`Registered service worker ${worker}`);
  }
};
