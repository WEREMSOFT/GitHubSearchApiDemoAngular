Pablo Weremczuk' AngularJS Demo
=====================================

This is a demo made for show some of my AngularJS and NodeJS skills. Since most of the work I have done is under NDA's, I decided to create this app in order to have some code to show.

I didn't wrote everything from scratch, I rely a lot on the work of other people. This is just to show you that I can create an application that can do stuff. We can talk about this if my skills catch your atention.

If you thinkg that you don' fully understand this code, don't worry, I can explain it to you if you want to talk with me. We can talk over skype, hangouts or we can share a beer. 

You can contact me using [LinkedIn](https://www.linkedin.com/in/pabloweremczuk)

The demo has some common features asked for technical tests, which are: load some JSON from internet and implement some kind of mechanism to avoid being banned for service abuse(like hit several times an endpoint within the same second).
 
This is a list of features that you can find on it:
 
 1. Uses AngularJS and NodeJS/Express
 2. It' uses a responsive HTML, which adapts to several screen resolutions(mobile first).
 3. It allows you to search for linkedin users, and shows you their followers.
 4. Since "search for users" and "get followers" are different endpoints, it implements an express proxy, in order to cache the request before hit GIT' API.
 5. Also implements a cache in the frontend.
 6. Both cache expires after some minutes.
 7. It uses OAuth to use the linkedin API(this is important if you want to see this code in action, you have to edit the `./gulp/util/middleware/gitProxy.js` file and set your).
 8. There is more stuff, but I don' want to spoil the surprice. 


---

### Getting up and running

1. Clone this repo.
2. Run `npm install` from the root directory
3. Run `npm run dev`
4. Your browser will automatically be opened and directed to the browser-sync proxy address
5. To prepare assets for production, run the `npm run build` script (Note: the production task does not fire up the express server, and won't provide you with browser-sync's live reloading. Simply use `npm run dev` during development. More information below)

Now that `npm run dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

This boilerplate uses the latest versions of the following libraries:

- [AngularJS](http://angularjs.org/)
- [SASS](http://sass-lang.com/)
- [Gulp](http://gulpjs.com/)
- [Browserify](http://browserify.org/)

Along with many Gulp libraries (these can be seen in either `package.json`, or at the top of each task in `/gulp/tasks/`).

---

### AngularJS

AngularJS is a MVW (Model-View-Whatever) Javascript Framework for creating single-page web applications. In this boilerplate, it is used for all the application routing as well as all of the frontend views and logic.

The AngularJS files are all located within `/app/js`.

##### Module organization

Controllers, services, directives, etc. should all be placed within their respective folders, and will be automatically required and mounted via their respective `index.js` using `bulk-require`.
 
 I'm not 100% happy with this aproach. I have plans to change it in the future for something more "feature based organization"
