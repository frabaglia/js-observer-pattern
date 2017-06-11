//Clojure for private scoping
var ObservableClojure = (function(name) {
  name = name
  type = "ObservableClojure"
  observers = []
  privateVar = undefined

  return {
    addObserver: function(observer) {
      observers.push(observer)
    },

    removeObserver: function(observer) {
      var index = observers.indexOf(observer)

      if (~index) {
        observers.splice(index, 1)
      }
    },

    notifyObservers: function() {
      for (var i = observers.length - 1; i >= 0; i--) {
        observers[i].push(name, privateVar)
      };
    },

    updatePrivate: function(newValue) {
      privateVar = newValue
      this.notifyObservers()
    },

    getPrivate: function() {
      return privateVar
    }
  }
})("ObservableClojure - 1")

//Object for fun
var ObservableObject = {
  name: "ObservableObject - 1",
  type: "ObservableObject",
  observers: [],
  privateVar: undefined,
  addObserver: function(observer) {
    this.observers.push(observer)
  },

  removeObserver: function(observer) {
    var index = this.observers.indexOf(observer)

    if (~index) {
      this.observers.splice(index, 1)
    }
  },

  notifyObservers: function() {
    for (var i = this.observers.length - 1; i >= 0; i--) {
      this.observers[i].push(this.name, this.privateVar)
    };
  },

  updatePrivate: function(newValue) {
    this.privateVar = newValue
    this.notifyObservers()
  },

  getPrivate: function() {
    return this.privateVar
  }
}

//Creating observers
var observer1 = {
  name: "ob-1",
  push: function(origin, privateValue) {
    console.log("My observer name is: " + this.name)
    console.log("The observable name is: " + origin)
    console.log("Private value is: " + privateValue)
  }
}

var observer2 = {
  name: "ob-2",
  push: function(origin, privateValue) {
    console.log("My observer name is: " + this.name)
    console.log("The observable name is: " + origin)
    console.log("Private value is: " + privateValue)
  }
}

//CLOJURE
//Adding observers
ObservableClojure.addObserver(observer1)
ObservableClojure.addObserver(observer2)
ObservableClojure.updatePrivate('New value 1')
ObservableClojure.updatePrivate('New value 2')
//Can't access
console.log("ObservableClojure.privateVar");
console.log(ObservableClojure.privateVar);
//Can access
console.log("ObservableClojure.getPrivate()");
console.log(ObservableClojure.getPrivate());
//Object keys
console.log("Object.keys(ObservableClojure)");
console.log(Object.keys(ObservableClojure));

//OBJECT
//Adding observers
ObservableObject.addObserver(observer1)
ObservableObject.addObserver(observer2)
ObservableObject.updatePrivate('New value 1')
ObservableObject.updatePrivate('New value 2')
//Can't access
console.log("ObservableObject.privateVar");
console.log(ObservableObject.privateVar);
//Can access
console.log("ObservableObject.getPrivate()");
console.log(ObservableObject.getPrivate());
//Object keys
console.log("Object.keys(ObservableObject)");
console.log(Object.keys(ObservableObject));
