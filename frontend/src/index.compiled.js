(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){let c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);let a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}let p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){let n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(let u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.currenciesData = exports.inventoryData = void 0;
    let inventoryData = [{
          name: 'Kerchief Bu',
          price: 9.25,
          img: 'https://i0.wp.com/wawaw.co/wp-content/uploads/2021/09/Pan%CC%83oleta-Bu-1.jpg?fit=1500%2C1500&ssl=1',
      },
      {
          name: 'Kerchief Snowman',
          price: 9.25,
          img: 'https://i0.wp.com/wawaw.co/wp-content/uploads/2021/11/pan%CC%83oleta-navidad-blanca-.jpg?fit=1500%2C1500&ssl=1',
      },
      {
          name: 'Kerchief Perry Christmas',
          price: 9.99,
          img: 'https://i0.wp.com/wawaw.co/wp-content/uploads/2021/11/pan%CC%83oleta-navidad-verde.jpg?fit=1500%2C1500&ssl=1',
      },
      {
          name: 'Kerchief Santa Can',
          price: 12.99,
          img: 'https://i0.wp.com/wawaw.co/wp-content/uploads/2021/11/vera.jpg?fit=1500%2C1500&ssl=1',
      },
      {
          name: 'Propiedad intelectual Wawaw',
          price: 17.99,
          img: 'https://i0.wp.com/wawaw.co/wp-content/uploads/2022/01/Pan%CC%83oleta-azul-lunares-blancas.jpg?fit=1500%2C1500&ssl=1',
      },
      {
          name: 'Kerchief Halloween with Ghosts',
          price: 12.99,
          img: 'https://i0.wp.com/wawaw.co/wp-content/uploads/2022/08/Pan%CC%83oleta-fantasmas-naranja-con-modelo.jpg?fit=1500%2C1500&ssl=1',
      },
    ];
    exports.inventoryData = inventoryData;
    let currenciesData = ['USD', 'EUR', 'COP'];
    exports.currenciesData = currenciesData;
    
    },{}],2:[function(require,module,exports){
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.App = void 0;
    
    let _react = _interopRequireDefault(require("react"));
    
    let _Inventory = require("../features/inventory/Inventory.js");
    
    let _CurrencyFilter = require("../features/currencyFilter/CurrencyFilter.js");
    
    let _Cart = require("../features/cart/Cart.js");
    
    let _SearchTerm = require("../features/searchTerm/SearchTerm.js");
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    // Import the Cart component here.
    // Render the Cart component below <Inventory />
    let App = function App(props) {
      let state = props.state,
          dispatch = props.dispatch;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_SearchTerm.SearchTerm, {
        searchTerm: state.searchTerm,
        dispatch: dispatch
      }), /*#__PURE__*/_react["default"].createElement(_CurrencyFilter.CurrencyFilter, {
        currencyFilter: state.currencyFilter,
        dispatch: dispatch
      }), /*#__PURE__*/_react["default"].createElement(_Inventory.Inventory, {
        inventory: getFilteredItems(state.inventory, state.searchTerm),
        currencyFilter: state.currencyFilter,
        dispatch: dispatch
      }), /*#__PURE__*/_react["default"].createElement(_Cart.Cart, {
        cart: state.cart,
        currencyFilter: state.currencyFilter,
        dispatch: dispatch
      }));
    
      function getFilteredItems(items, searchTerm) {
        return items.filter(function (items) {
          return items.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
      }
    };
    
    exports.App = App;
    
    },{"../features/cart/Cart.js":4,"../features/currencyFilter/CurrencyFilter.js":6,"../features/inventory/Inventory.js":8,"../features/searchTerm/SearchTerm.js":10,"react":undefined}],3:[function(require,module,exports){
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.store = void 0;
    
    let _redux = require("redux");
    
    let _cartSlice = require("../features/cart/cartSlice.js");
    
    let _inventorySlice = require("../features/inventory/inventorySlice.js");
    
    let _currencyFilterSlice = require("../features/currencyFilter/currencyFilterSlice.js");
    
    let _searchTermSlice = require("../features/searchTerm/searchTermSlice.js");
    
    // Import createStore and combineReducers here.
    // npm install redux
    // Import the slice reducers here.
    // Create and export the store here.
    let store = (0, _redux.createStore)((0, _redux.combineReducers)({
      cart: _cartSlice.cartReducer,
      inventory: _inventorySlice.inventoryReducer,
      currencyFilter: _currencyFilterSlice.currencyFilterReducer,
      searchTerm: _searchTermSlice.searchTermReducer
    }));
    exports.store = store;
    
    },{"../features/cart/cartSlice.js":5,"../features/currencyFilter/currencyFilterSlice.js":7,"../features/inventory/inventorySlice.js":9,"../features/searchTerm/searchTermSlice.js":11,"redux":undefined}],4:[function(require,module,exports){
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Cart = void 0;
    
    let _react = _interopRequireDefault(require("react"));
    
    let _utilities = require("../../utilities/utilities.js");
    
    let _cartSlice = require("./cartSlice.js");
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
    
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (let i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    let Cart = function Cart(props) {
      let cart = props.cart,
          currencyFilter = props.currencyFilter,
          dispatch = props.dispatch;
    
      let onInputChangeHandler = function onInputChangeHandler(name, input) {
        // If the user enters a bad value...
        if (input === '') {
          return;
        } // Otherwise, convert the input into a number and pass it along as the newQuantity.
    
    
        let newQuantity = Number(input); // Dispatch an action to change the quantity of the given name and quantity.
    
        dispatch((0, _cartSlice.changeItemQuantity)(name, newQuantity));
      }; // Use the cart and currencyFilter slices to render the data.
    
    
      let cartElements = Object.keys(cart).map(createCartItem);
      let total = (0, _utilities.calculateTotal)(cart, currencyFilter);
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "cart-container"
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        id: "cart-items"
      }, cartElements), /*#__PURE__*/_react["default"].createElement("h3", {
        className: "total"
      }, "Total", ' ', /*#__PURE__*/_react["default"].createElement("span", {
        className: "total-value"
      }, (0, _utilities.getCurrencySymbol)(currencyFilter), total, " ", currencyFilter)));
    
      function createCartItem(name) {
        let item = cart[name];
    
        if (item.quantity === 0) {
          return;
        }
    
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: name
        }, /*#__PURE__*/_react["default"].createElement("p", null, name), /*#__PURE__*/_react["default"].createElement("select", {
          className: "item-quantity",
          value: item.quantity,
          onChange: function onChange(e) {
            onInputChangeHandler(name, e.target.value);
          }
        }, _toConsumableArray(Array(100).keys()).map(function (_, index) {
          return /*#__PURE__*/_react["default"].createElement("option", {
            key: index,
            value: index
          }, index);
        })));
      }
    };
    
    exports.Cart = Cart;
    
    },{"../../utilities/utilities.js":13,"./cartSlice.js":5,"react":undefined}],5:[function(require,module,exports){
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.cartReducer = exports.changeItemQuantity = exports.addItem = void 0;
    
    function ownKeys(object, enumerableOnly) { let keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
    
    function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { let source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
    
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    
    let addItem = function addItem(itemToAdd) {
      return {
        type: 'cart/addItem',
        payload: itemToAdd
      };
    }; // Create your changeItemQuantity action creator here.
    
    
    exports.addItem = addItem;
    
    let changeItemQuantity = function changeItemQuantity(name, newQuantity) {
      return {
        type: 'cart/changeItemQuantity',
        payload: {
          name: name,
          newQuantity: newQuantity
        }
      };
    };
    
    exports.changeItemQuantity = changeItemQuantity;
    let initialCart = {};
    
    let cartReducer = function cartReducer() {
      let cart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCart;
      let action = arguments.length > 1 ? arguments[1] : undefined;
    
      switch (action.type) {
        case 'cart/addItem':
          {
            let _action$payload = action.payload,
                name = _action$payload.name,
                price = _action$payload.price; // if the item already exists, increase the quantity by 1, otherwise set it to 1
    
            let quantity = cart[name] ? cart[name].quantity + 1 : 1;
            let newItem = {
              price: price,
              quantity: quantity
            }; // Add the new item to the cart (or replace it if it existed already)
    
            return _objectSpread(_objectSpread({}, cart), {}, _defineProperty({}, name, newItem));
          }
    
        case 'cart/changeItemQuantity':
          {
            let _action$payload2 = action.payload,
                _name = _action$payload2.name,
                newQuantity = _action$payload2.newQuantity;
            let itemToUpdate = cart[_name]; // Create a copy of itemToUpdate and update the quantity prop.
    
            let updatedItem = _objectSpread(_objectSpread({}, itemToUpdate), {}, {
              quantity: newQuantity
            }); // Return a copy of the cart with the updatedItem included.
    
    
            return _objectSpread(_objectSpread({}, cart), {}, _defineProperty({}, _name, updatedItem));
          }
    
        default:
          {
            return cart;
          }
      }
    };
    
    exports.cartReducer = cartReducer;
    
    },{}],6:[function(require,module,exports){
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CurrencyFilter = void 0;
    
    let _react = _interopRequireDefault(require("react"));
    
    let _data = require("../../../data.js");
    
    let _currencyFilterSlice = require("./currencyFilterSlice.js");
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    let CurrencyFilter = function CurrencyFilter(_ref) {
      let currencyFilter = _ref.currencyFilter,
          dispatch = _ref.dispatch;
    
      let onClickHandler = function onClickHandler(currency) {
        dispatch((0, _currencyFilterSlice.setCurrency)(currency));
      };
    
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "currency-filters-container"
      }, /*#__PURE__*/_react["default"].createElement("h3", null, "Choose a currency"), _data.currenciesData.map(createCurrencyButton));
    
      function createCurrencyButton(currency) {
        return /*#__PURE__*/_react["default"].createElement("button", {
          className: "currency-button ".concat(currencyFilter === currency && 'selected'),
          key: currency,
          onClick: function onClick() {
            return onClickHandler(currency);
          }
        }, currency);
      }
    };
    
    exports.CurrencyFilter = CurrencyFilter;
    
    },{"../../../data.js":1,"./currencyFilterSlice.js":7,"react":undefined}],7:[function(require,module,exports){
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.setCurrency = exports.currencyFilterReducer = void 0;
    let initialCurrencyFilter = 'USD';
    
    let currencyFilterReducer = function currencyFilterReducer() {
      let currencyFilter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCurrencyFilter;
      let action = arguments.length > 1 ? arguments[1] : undefined;
    
      switch (action.type) {
        case 'currencyFilter/setCurrency':
          {
            return action.payload;
          }
    
        default:
          {
            return currencyFilter;
          }
      }
    };
    
    exports.currencyFilterReducer = currencyFilterReducer;
    
    let setCurrency = function setCurrency(currency) {
      return {
        type: 'currencyFilter/setCurrency',
        payload: currency
      };
    };
    
    exports.setCurrency = setCurrency;
    
    },{}],8:[function(require,module,exports){
    
    
    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Inventory = void 0;
    
    let _react = _interopRequireWildcard(require("react"));
    
    let _utilities = require("../../utilities/utilities.js");
    
    let _cartSlice = require("../cart/cartSlice.js");
    
    let _inventorySlice = require("./inventorySlice");
    
    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; let cacheBabelInterop = new WeakMap(); let cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
    
    // eslint-disable-next-line no-mixed-operators
    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } let cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } let newObj = {}; let hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (let key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { let desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
    
    let Inventory = function Inventory(_ref) {
      let inventory = _ref.inventory,
          currencyFilter = _ref.currencyFilter,
          dispatch = _ref.dispatch;
    
      let onMount = function onMount() {
        dispatch((0, _inventorySlice.loadData)());
      };
    
      (0, _react.useEffect)(onMount, [dispatch]);
    
      let onClickHandler = function onClickHandler(inventoryItem) {
        dispatch((0, _cartSlice.addItem)(inventoryItem));
      };
    
      if (inventory.length === 0) {
        return /*#__PURE__*/_react["default"].createElement("p", null, " Sorry, no products are currently available... ");
      }
    
      return /*#__PURE__*/_react["default"].createElement("ul", {
        id: "inventory-container"
      }, inventory.map(createInventoryItem));
    
      function createInventoryItem(inventoryItem) {
        let price = inventoryItem.price,
            name = inventoryItem.name,
            img = inventoryItem.img;
        let displayPrice = (0, _utilities.calculatePrice)(price, currencyFilter);
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: name,
          className: "item"
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: img,
          alt: ''
        }), /*#__PURE__*/_react["default"].createElement("h3", null, name), /*#__PURE__*/_react["default"].createElement("h3", {
          className: "price"
        }, (0, _utilities.getCurrencySymbol)(currencyFilter), displayPrice.toFixed(2), " ", currencyFilter), /*#__PURE__*/_react["default"].createElement("button", {
          onClick: function onClick() {
            return onClickHandler(inventoryItem);
          },
          className: "add-to-cart-button"
        }, "Add to Cart"));
      }
    };
    
    exports.Inventory = Inventory;
    
    },{"../../utilities/utilities.js":13,"../cart/cartSlice.js":5,"./inventorySlice":9,"react":undefined}],9:[function(require,module,exports){
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.inventoryReducer = exports.loadData = void 0;
    
    let _data = require("../../../data.js");
    
    let loadData = function loadData(data) {
      return {
        type: 'inventory/loadData',
        payload: _data.inventoryData
      };
    };
    
    exports.loadData = loadData;
    let initialInventory = [];
    
    let inventoryReducer = function inventoryReducer() {
      let inventory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialInventory;
      let action = arguments.length > 1 ? arguments[1] : undefined;
    
      switch (action.type) {
        case 'inventory/loadData':
          {
            return action.payload;
          }
    
        default:
          {
            return inventory;
          }
      }
    };
    
    exports.inventoryReducer = inventoryReducer;
    
    },{"../../../data.js":1}],10:[function(require,module,exports){
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SearchTerm = void 0;
    
    let _react = _interopRequireDefault(require("react"));
    
    let _searchTermSlice = require("./searchTermSlice.js");
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    let searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
    let clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';
    
    let SearchTerm = function SearchTerm(props) {
      let searchTerm = props.searchTerm,
          dispatch = props.dispatch;
    
      let onSearchTermChangeHandler = function onSearchTermChangeHandler(e) {
        let userInput = e.target.value;
        dispatch((0, _searchTermSlice.setSearchTerm)(userInput));
      };
    
      let onClearSearchTermHandler = function onClearSearchTermHandler() {
        dispatch((0, _searchTermSlice.clearSearchTerm)());
      };
    
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "search-container"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        id: "search-icon",
        alt: "",
        src: searchIconUrl
      }), /*#__PURE__*/_react["default"].createElement("input", {
        id: "search",
        type: "text",
        value: searchTerm,
        onChange: onSearchTermChangeHandler,
        placeholder: "Search products"
      }), searchTerm.length > 0 && /*#__PURE__*/_react["default"].createElement("button", {
        onClick: onClearSearchTermHandler,
        type: "button",
        id: "search-clear-button"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: clearIconUrl,
        alt: ""
      })));
    };
    
    exports.SearchTerm = SearchTerm;
    
    },{"./searchTermSlice.js":11,"react":undefined}],11:[function(require,module,exports){
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.clearSearchTerm = exports.setSearchTerm = exports.searchTermReducer = void 0;
    let initialState = '';
    
    let searchTermReducer = function searchTermReducer() {
      let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      let action = arguments.length > 1 ? arguments[1] : undefined;
    
      switch (action.type) {
        case 'searchTerm/setSearchTerm':
          {
            let newTerm = action.payload;
            return newTerm;
          }
    
        case 'searchTerm/clearSearchTerm':
          {
            return '';
          }
    
        default:
          {
            return state;
          }
      }
    };
    
    exports.searchTermReducer = searchTermReducer;
    
    let setSearchTerm = function setSearchTerm(term) {
      return {
        type: 'searchTerm/setSearchTerm',
        payload: term
      };
    };
    
    exports.setSearchTerm = setSearchTerm;
    
    let clearSearchTerm = function clearSearchTerm() {
      return {
        type: 'searchTerm/clearSearchTerm'
      };
    };
    
    exports.clearSearchTerm = clearSearchTerm;
    
    },{}],12:[function(require,module,exports){
    
    
    let _react = _interopRequireDefault(require("react"));
    
    let _reactDom = _interopRequireDefault(require("react-dom"));
    
    let _App = require("./app/App.js");
    
    let _store = require("./app/store.js");
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
    
    let render = function render() {
      _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_App.App, {
        state: _store.store.getState(),
        dispatch: _store.store.dispatch
      }), document.getElementById('root'));
    };
    
    render(); // Subscribing render to the store.
    
    _store.store.subscribe(render);
    
    },{"./app/App.js":2,"./app/store.js":3,"react":undefined,"react-dom":undefined}],13:[function(require,module,exports){
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.calculatePrice = calculatePrice;
    exports.calculateTotal = calculateTotal;
    exports.getCurrencySymbol = getCurrencySymbol;
    
    function calculatePrice(price, currency) {
      switch (currency) {
        case 'EUR':
          return price * 0.86;
    
        case 'COP':
          return price * 4400;
    
        default:
          return price;
      }
    }
    
    function calculateTotal(cart, currency) {
      let totalUSD = 0;
      Object.keys(cart).forEach(function (itemName) {
        totalUSD += cart[itemName].price * cart[itemName].quantity;
      });
      return calculatePrice(totalUSD, currency).toFixed(2);
    }
    
    function getCurrencySymbol(currencyFilter) {
      switch (currencyFilter) {
        case 'USD':
          return '$';
    
        case 'EUR':
          return '€';
    
        case 'COP':
          return '$';
    
        default:
          return '';
      }
    }
    
    },{}]},{},[12]);
    