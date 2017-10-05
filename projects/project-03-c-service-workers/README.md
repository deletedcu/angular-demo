[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Project: The **Offline** Death Square

As we all know, intergalactic WiFi isn't the best. With that in mind, we need to make sure we can see our Death Square Dashboard™, even when the Internet's out.

### Instructions:

1. Open up our data banks. Go into `turret-api` and run `seed.js` and `server.js` — don't forget to install those npm modules.

2. Go into `imperial-starfleet` and start up our front end.

3. Put the same Service Worker `<script>` tag that we had in last lesson at the bottom of the `index.html` `<body>` tag.

4. Add an empty `service-worker.js` file in the `src` directory.

5. Add `service-worker.js` to the array of `assets` in the `.angular-cli-json` file in the root directory of our app.

6. Check your Dev Tools console. If you don't see `ServiceWorker registration successful...`, make sure you followed all of the steps above, then kill and start `ng serve` again.

7. To take this app fully offline, we'll need to build it first. Go to the root of your app and run `ng build --prod --aot=false`. The contents of your app are now in `dist` (for "distribution").  

8. Open your app by `cd`ing into `dist` and running `python -m SimpleHTTPServer`. Go into the `Application` tab in Dev Tools, select `service workers` in the sidebar, and check the `offline` box. Refresh the page and the dashboard should disappear. No offline access? Let's fix that.

9. In `dist`, fill out `service-worker.js` in the same way we did last lesson: with a `fetch` and an `install` promise.  However, you'll need different URLs to cache. Make sure you add `index.html`, the Service Worker file, and both images inside your `assets` folder.

10. Save this file, go back to Dev Tools, and uncheck the `offline` box. Refresh the page. Verify your images, `index.html`, and `service-worker.js` are all in `cache Storage` in the `application` tab of Dev Tools. If they're not, you may need to click the `update` link on your Service Worker in Dev Tools.

11. Check `offline` again and refresh the page. This time, we should see our death square in all its offline glory.

>**Note:** Make sure you are going directly to `http://localhost:8000/` when you refresh, not any of the sub-pages like `/info/8`. You can navigate to those sub-pages later by clicking on the turrets, but if you do it in the beginning, it will trigger a network request. Since we're offline, this would fail.

### Resources

- [Angular apps with Service Workers](https://coryrylan.com/blog/fast-offline-angular-apps-with-service-workers).
