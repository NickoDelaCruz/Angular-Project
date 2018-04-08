# Hollywood Video resurrection

Made Hollywood Video a website for FREE!

Live demo: https://epicodus-199501.firebaseapp.com/

![alt tag](https://i.gyazo.com/ad875e5736aed23c2895273765ece59e.jpg)

![alt tag](https://i.gyazo.com/8d1f4d90aba37d0a3f43e672bccfb888.png)


## Prerequisites

You need node to run my site

```
Node: https://nodejs.org/en/
```

### Installation
```
Open Terminal
```
```
$ git clone https://github.com/NickoDelaCruz/HollywoodVideo.git
```
```
Navigate to Hollywoodvideo
```
```
$ npm install -g @angular/cli
```
```
$ npm install
```


### Firebase Installation

Create api-keys.ts in the app dir

run:

```
$ touch src/app/api-keys.ts
```

Add this into api-keys.ts with your own Api information

```
export const firebaseApiKey = {
    apiKey: "",
     authDomain: "",
     databaseURL: "",
     projectId: "",
     storageBucket: "",
     messagingSenderId: ""
}
```
To run:

```
ng serve --open
```


## Build and Test
To Build:
```
ng build
```

To run test via Karma
```
ng build
```


### Current Features (Day 1 and 2)

* Firebase database

* Deployed Firebase

* Routing

* Dynamic Routing

* Deployed Firebase

* Admin can delete games


### Future Features


* Login system (User Authentication)

* Music store

* Firebase with movies (ran out of time, pretty doable)

* Admin can delete movies

### Bugs

Getting weird flickering due to my crappy styling code. It's probably due to the lazy footer I made.

## Built With

* [Atom](https://atom.io/) - Text editor
* [cmder](http://cmder.net/) - Windows terminal
* [npm](https://nodejs.org/en/) - Used to install angular


## Authors

* **Nicko Dela Cruz**  [Epicodus Github](https://github.com/NickoDelaCruz)



## License

OS


































<!-- # Hollywood Video resurrection

Revamping a dead company's website, allowing users to view and purchase DVDs.

Since hollywood video doesn't have a site anymore, i'm going by memory, or until I find a cached ver.

However
http://www.blockbuster.com/ is still active so I will lean towards that design as a last resort.


## Prerequisites

You need node to run my site

```
Node: https://nodejs.org/en/
```

### Installation

First (1/3)

```
Open Terminal
```

Second (2/3)

```
$ git clone https://github.com/NickoDelaCruz/HollywoodVideo.git
```

Third (3/3)

```
npm install
```

To deploy server run:

```
ng serve
```




## Build and Running Test
To Build:
```
ng build
```

To run test via Karma
```
ng build
```


### Current features (User Stories Day 1)

* As a ADMIN I want to be able to add/remove movies

* As a USER I want to be able to navigate throughout the sites nav bar

* As a USER I want to view DVDs for sale

* As a USER I want to different categories of DVDs

* As a USER I want to be able to purchase DVDs

* As a USER I want to be able to view my shopping cart

* As a USER I want to be able edit my shopping cart (not yet individually, can clear cart)

* As a USER I want to view the store and game sections (Almost done, need more routing)



### Future Features (Day 2)

* Implement Firebase with movies and games

* A separate page for shopping cart (user marketplace ref)

* The game crazy side of hollywood video that sells games, consoles, and music

* Login system (User Authentication)

* Let admin add movies


## Built With

* [Atom](https://atom.io/) - Text editor
* [cmder](http://cmder.net/) - Windows terminal
* [npm](https://nodejs.org/en/) - Used to install angular


## Authors

* **Nicko Dela Cruz**  [Epicodus Github](https://github.com/NickoDelaCruz)



## License

OS -->
