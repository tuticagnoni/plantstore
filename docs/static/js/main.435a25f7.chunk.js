(this["webpackJsonpplant-store"]=this["webpackJsonpplant-store"]||[]).push([[0],{61:function(e,t,a){},64:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(28),c=a.n(n),i=(a(61),a(15)),s=a(11),o=(a(62),a(10)),l=a(89),d=a(86),j=a(24),u=[{id:1,title:"Serpiente",description:"La planta Serpiente se encuentran entre las plantas suculentas de interior m\xe1s f\xe1ciles de cuidar, lo que las convierte en la opci\xf3n ideal para los jardineros principiantes. Es mejor mantenerla en una habitaci\xf3n de la casa que reciba luz solar indirecta, ya que sus hojas se marchitar\xe1n a la luz solar directa.",imageUrl:"https://image.freepik.com/free-photo/snake-plant-white-pot_53876-95437.jpg",price:250},{id:2,title:"De Jade",description:"La planta de Jade es una de las plantas de interior m\xe1s recurrentes, sobre todo debido a su f\xe1cil mantenimiento. Crece lentamente a lo largo de los a\xf1os y, cuando se cultiva en interiores, puede alcanzar una altura de hasta un metro y medio aproximadamente. Sus hojas permanecen verdes todo el a\xf1o y, despu\xe9s de muchos a\xf1os, puede comenzar a producir en primavera flores blancas peque\xf1as.",imageUrl:"https://image.freepik.com/free-photo/pepper-face-plant-small-pot_53876-94408.jpg",price:200},{id:3,title:"Calathea",description:"Son plantas que crecen en ambientes tropicales. Por esto, son ideales para tenerlas en interior donde le llegue buena cantidad de luz indirecta y evitando las corrientes de aire para que no se resienta. Si las temperaturas son altas conviene rociar sus hojas con agua para replicar el ambiente tropical que necesita.",imageUrl:"https://image.freepik.com/free-photo/calathea-ornata-sanderiana-orange-flowerpot_53876-65619.jpg",price:350},{id:4,title:"Orejas de Conejo",description:"Estas plantas son el sue\xf1o de un jardinero por su poca demanda de cuidados y apariencia interesante. No necesita mucha cantidad de agua, en especial en invierno, cuando hace calor la tierra no debe permanecer seca mucho tiempo. Sus flores de color amarillo y rojo surgen de las puntas en verano.",imageUrl:"https://image.freepik.com/free-photo/bunny-ears-cactus-flowerpot_53876-65617.jpg",price:400},{id:5,title:"Ficus",description:"Por lo general los ficus necesitan una iluminaci\xf3n abundante, pero sin que les d\xe9 directamente los rayos del sol. En invierno es importante que reciban bastante luz y en verano se pueden sacar al exterior, pero en un lugar con semisombra para que no les da\xf1e el sol. Son plantas que se adaptan perfectamente a un ambiente seco pero, para que aguanten bien, hay que regarlas adecuadamente. En verano, una vez por semana, y en invierno, cada 15 d\xedas",imageUrl:"https://www.elmueble.com/medio/2020/10/29/ficus-lyrata_8eccdefb_1140x1140.jpg",price:600},{id:6,title:"Monstera",description:"Considerada como una de las plantas de interior m\xe1s resistentes, f\xe1ciles de cuidar y sumamente decorativas. Si quieres que crezca grande y fuerte, lo mejor es ponerla en un lugar c\xe1lido y luminoso pero sin sol directo. Para poder guiarla, darle forma y apoyarla, se sugiere poner un tutor o palo en donde pueda sostenerse para empezar a trepar. ",imageUrl:"https://www.elmueble.com/medio/2020/10/29/planta-monstera_69927908_1200x1200.jpg",price:450},{id:7,title:"Aloe Vera",description:"Conocida como \u2018la planta de los mil usos\u2019 y no es para menos. El aloe vera necesita mucho sol, cualquiera que se dedique a cuidar plantas debe saberlo, as\xed que puedes colocarla en un rinc\xf3n luminoso de tu hogar o en la terraza o balc\xf3n. Basta con que la riegues cada dos semanas, pero si la tienes fuera prot\xe9gela en invierno, pues no le va bien el fr\xedo. ",imageUrl:"https://cdn.shopify.com/s/files/1/1706/1307/products/Aloe-vera_5000x.jpg?v=1615472386",price:400},{id:8,title:"Zebrina p\xe9ndula",description:"Aqu\xed tienes una opci\xf3n genial si quieres una planta de interior diferente y original que, adem\xe1s, resulte f\xe1cil de cultivar.Aunque es muy fuerte y resistente, necesita luz natural para mostrar esa composici\xf3n tricolor, ya que de lo contrario las hojas se vuelven verdes.",imageUrl:"https://www.hola.com/imagenes/decoracion/20200703171409/plantas-interior-colgantes-decorar-casa-mc/0-843-319/plantas-colgantes-4-a.jpg",price:300}],b=a(2),p=Object(r.createContext)(),m=function(e){var t=e.children,a=Object(r.useState)(u),n=Object(j.a)(a,1)[0];return Object(b.jsx)(p.Provider,{value:{products:n},children:t})},O=a(49),h=a(94),x=a(87),f=a(88),g=function(e,t){return t.find((function(t){return t.id===e.id}))},v=a(30),y=function(e){return function(e){var t=e.length>0?e:[];localStorage.setItem("cart",JSON.stringify(t))}(e),{itemCount:e.reduce((function(e,t){return e+t.quantity}),0),total:e.reduce((function(e,t){return e+t.price*t.quantity}),0)}},C=function(e,t){switch(t.type){case"ADD_ITEM":return e.cartItems.find((function(e){return e.id===t.payload.id}))||e.cartItems.push(Object(o.a)(Object(o.a)({},t.payload),{},{quantity:1})),Object(o.a)(Object(o.a)({},e),{},{cartItems:Object(v.a)(e.cartItems)},y(e.cartItems));case"INCREASE":var a=e.cartItems.findIndex((function(e){return e.id===t.payload.id}));return e.cartItems[a].quantity++,Object(o.a)(Object(o.a)({},e),{},{cartItems:Object(v.a)(e.cartItems)},y(e.cartItems));case"DECREASE":var r=e.cartItems.findIndex((function(e){return e.id===t.payload.id})),n=e.cartItems[r];return n.quantity>1&&n.quantity--,Object(o.a)(Object(o.a)({},e),{},{cartItems:Object(v.a)(e.cartItems)},y(e.cartItems));case"REMOVE_ITEM":var c=e.cartItems.filter((function(e){return e.id!==t.payload.id}));return Object(o.a)(Object(o.a)({},e),{},{cartItems:Object(v.a)(c)},y(c));case"CLEAR":return localStorage.removeItem("cart"),{cartItems:[],itemCount:0,total:0};default:return e}},I=Object(r.createContext)(),N=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],k=Object(o.a)({cartItems:N},y(N)),q=function(e){var t=e.children,a=Object(r.useReducer)(C,k),n=Object(j.a)(a,2),c=n[0],i=n[1],s=Object(o.a)(Object(o.a)({},c),{},{addProduct:function(e){return i({type:"ADD_ITEM",payload:e})},increase:function(e){return i({type:"INCREASE",payload:e})},decrease:function(e){return i({type:"DECREASE",payload:e})},removeProduct:function(e){return i({type:"REMOVE_ITEM",payload:e})},clearCart:function(){return i({type:"CLEAR"})}});return Object(b.jsx)(I.Provider,{value:s,children:t})},E=(a(64),function(e){var t=e.title,a=e.imageUrl,n=e.price,c=e.id,s={title:t,imageUrl:a,price:n,id:c,description:e.description},o=Object(r.useContext)(I),l=o.addProduct,j=o.cartItems,u=o.removeProduct;return Object(b.jsx)(d.a,{children:Object(b.jsx)(O.a,{sm:2,children:Object(b.jsxs)(h.a,{style:{width:"14rem"},className:"cardProduct",children:[Object(b.jsx)(i.b,{to:"product/".concat(c),children:Object(b.jsx)(h.a.Img,{variant:"top widht=10%",src:a,alt:"imagen",className:"cardImg border"})}),Object(b.jsxs)(h.a.Body,{children:[Object(b.jsx)(h.a.Title,{children:t}),Object(b.jsxs)(h.a.Text,{children:["$ ",n]}),!g(s,j)&&Object(b.jsx)(x.a,{variant:"dark",onClick:function(){return l(s)},children:"Agregar al Carrito"}),g(s,j)&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x.a,{variant:"success",onClick:function(){return l(s)},children:"Agregar Otro"}),Object(b.jsx)(f.a,{onClick:function(){return u(s)},style:{margin:"6px"}})]})]})]})})})}),w=function(){var e=Object(r.useContext)(p).products.filter((function(e,t){return t<4})).map((function(e){return Object(r.createElement)(E,Object(o.a)(Object(o.a)({},e),{},{key:e.id}))}));return Object(b.jsx)("div",{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)("h3",{children:"Productos Destacados"}),Object(b.jsx)(d.a,{children:e})]})})},S=a(51),A=(a(72),function(){return Object(b.jsx)("div",{children:Object(b.jsx)("section",{children:Object(b.jsxs)(S.a,{className:"heroImage",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("h1",{className:"heroTitle",children:["Llen\xe1 tu casa de plantas ",Object(b.jsx)("br",{})," comprando en un solo lugar"]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})})})}),P=(a(73),function(){var e=(new Date).getFullYear();return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{})," ",Object(b.jsxs)("div",{className:"footer",children:[e," - \u273f PlantStore "]})]})}),T=a(48),L=a(39),z=a(90),F=(a(74),function(){var e=Object(r.useContext)(I),t=e.itemCount,a=e.cartItems;return console.log("cartItems:",a),Object(b.jsx)("div",{children:Object(b.jsxs)(i.b,{to:"/cart",className:"cartIcon",children:[" ",Object(b.jsx)(z.a,{}),t>0?Object(b.jsxs)("span",{className:"cartCount",children:[" ",t," "]}):null]})})}),D=a.p+"static/media/leaf.12dc835a.png",U=(a(75),function(){return Object(b.jsxs)(T.a,{variant:"tabs",children:[Object(b.jsx)(T.a.Brand,{href:"/",children:Object(b.jsx)("img",{src:D,alt:"Logo",className:"logoImg"})}),Object(b.jsxs)(L.a,{className:"mr-auto",children:[Object(b.jsx)(L.a.Link,{href:"/",className:"linkNav",children:"Plant Store"}),Object(b.jsx)(L.a.Link,{href:"/shop",className:"linkNav",children:"Tienda"})]}),Object(b.jsx)(F,{href:"/cart"})]})}),_=function(e){var t=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(U,{}),Object(b.jsx)("main",{children:t}),Object(b.jsx)(P,{})]})},R=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(_,{children:[Object(b.jsx)(A,{}),Object(b.jsx)(w,{})]})})},B=(a(77),function(){var e=Object(r.useContext)(p).products.map((function(e){return Object(r.createElement)(E,Object(o.a)(Object(o.a)({},e),{},{key:e.id}))}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(_,{children:Object(b.jsxs)("div",{className:"tiendaContainer",children:[Object(b.jsx)("h2",{className:"tiendaTitle",children:"Tienda"}),Object(b.jsx)("div",{className:"tiendaList",children:e})]})})})}),J=a(54),M=(a(78),function(e){var t=e.match,a=e.history.push,n=Object(r.useContext)(p).products,c=Object(r.useContext)(I),i=c.addProduct,s=c.cartItems,o=c.increase,u=c.removeProduct,m=t.params.id,h=Object(r.useState)(null),v=Object(j.a)(h,2),y=v[0],C=v[1];if(Object(r.useEffect)((function(){var e=n.find((function(e){return Number(e.id)===Number(m)}));C(e)}),[m,y,a,n]),!y)return Object(b.jsx)(J.a,{animation:"border",variant:"success"});var N=y.imageUrl,k=y.title,q=y.price,E=y.description;return Object(b.jsx)(_,{children:Object(b.jsx)(l.a,{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(O.a,{children:Object(b.jsx)("img",{src:N,alt:"imagen-planta",className:"imageProduct"})}),Object(b.jsxs)(O.a,{children:[Object(b.jsx)("h3",{children:k}),Object(b.jsxs)("p",{children:["$ ",q]}),Object(b.jsx)("p",{children:E}),Object(b.jsxs)("div",{className:"buttonsDetails",children:[!g(y,s)&&Object(b.jsx)(x.a,{variant:"dark",onClick:function(){return i(y)},children:"Agregar al Carrito"}),g(y,s)&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x.a,{variant:"success",onClick:function(){return o(y)},children:"Agregar Otro"}),Object(b.jsx)(f.a,{onClick:function(){return u(y)},style:{margin:"6px"}})]})]})]})]})})})}),G=(a(79),a(91)),$=a(92),Q=(a(80),function(e){var t=e.title,a=e.imageUrl,r=e.price,n=e.quantity,c=e.id,i=e.description,s=e.increase,o=e.decrease,l=e.removeProduct,j={title:t,imageUrl:a,price:r,quantity:n,id:c,description:i};return Object(b.jsx)(d.a,{className:"item",children:Object(b.jsx)(O.a,{children:Object(b.jsxs)(h.a,{style:{width:"14rem"},className:"cardProduct",children:[Object(b.jsx)(h.a.Img,{variant:"top widht=10%",src:a,className:"cartImg",alt:"imagen-planta"}),Object(b.jsxs)(h.a.Body,{children:[Object(b.jsx)(h.a.Title,{children:t}),Object(b.jsxs)(h.a.Text,{children:["$ ",r]}),Object(b.jsxs)(h.a.Text,{children:["cantidad: ",n]}),Object(b.jsx)(G.a,{width:"30px",onClick:function(){return s(j)}}),n>=1&&Object(b.jsx)(f.a,{width:"30px",onClick:function(){return l(j)}}),n>1&&Object(b.jsx)($.a,{width:"30px",onClick:function(){return o(j)}})]})]})})})}),V=function(e){var t=e.itemCount,a=e.total,r=e.clearCart;return Object(b.jsxs)(O.a,{className:"block-example border rounded mb-0 ",style:{padding:"15px",width:"10%"},children:[Object(b.jsxs)("p",{children:["Total Items: ",t]}),Object(b.jsxs)("p",{children:["Total: $ ",a]}),0===t?null:Object(b.jsx)(x.a,{variant:"dark",onClick:function(){return r()},children:"Quitar Compras"})]})},Y=function(){var e=Object(r.useContext)(I),t=e.cartItems,a=e.itemCount,n=e.total,c=e.increase,s=e.decrease,j=e.removeProduct,u=e.clearCart,p={increase:c,decrease:s,removeProduct:j};return Object(b.jsxs)(_,{children:[Object(b.jsxs)(l.a,{className:"container",children:[Object(b.jsx)(d.a,{children:Object(b.jsxs)("h1",{children:[Object(b.jsx)(z.a,{}),"Tus Compras"]})}),Object(b.jsx)(d.a,{children:Object(b.jsx)(V,{itemCount:a,total:n,clearCart:u})}),Object(b.jsx)(d.a,{children:0===t.length?Object(b.jsx)("div",{className:"cartAviso",children:"Todav\xeda no agregaste nada al carrito"}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(d.a,{children:t.map((function(e){return Object(r.createElement)(Q,Object(o.a)(Object(o.a)({},e),{},{key:e.id},p))}))})})})]}),Object(b.jsx)("div",{className:"buttonCartContainer",children:0===t.length?null:Object(b.jsx)(i.b,{to:"/form",className:"buttonCart",children:Object(b.jsx)(x.a,{variant:"success",children:"Comprar!"})})})]})},K=(a(47),a(55),a(33)),X=a(93),Z=a(56),H=(a(84),Z.a.initializeApp({apiKey:"AIzaSyCNBzIyeJ-rQXi65-77fgGmwhQLxAhvPvQ",authDomain:"plantstore-8f7e1.firebaseapp.com",projectId:"plantstore-8f7e1",storageBucket:"plantstore-8f7e1.appspot.com",messagingSenderId:"957036910704",appId:"1:957036910704:web:472fb88e81c7ebbae5bcb5"}).firestore(),function(e){var t=e.itemCount,a=e.total;e.clearCart;return Object(b.jsxs)(O.a,{className:"block-example border rounded mb-0 ",style:{padding:"15px"},children:[Object(b.jsxs)("p",{children:["Total Items: ",t]}),Object(b.jsxs)("p",{children:["Total: $ ",a]})]})}),W=function(){var e=Object(r.useContext)(I),t=e.itemCount,a=e.total,n=e.clearCart,c=Object(r.useState)({name:"",apellido:"",email:"",direccion:""}),s=Object(j.a)(c,2),u=s[0],p=s[1],m=function(e){p(Object(o.a)(Object(o.a)({},u),{},Object(K.a)({},e.target.name,e.target.value)))};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(_,{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)(H,{itemCount:t,total:a})}),Object(b.jsxs)(X.a,{style:{margin:"7%"},children:[Object(b.jsxs)(X.a.Group,{children:[Object(b.jsx)(X.a.Label,{children:"Nombre"}),Object(b.jsx)(X.a.Control,{type:"name",placeholder:"Nombre",name:"name",onChange:m})]}),Object(b.jsxs)(X.a.Group,{children:[Object(b.jsx)(X.a.Label,{children:"Apellido"}),Object(b.jsx)(X.a.Control,{type:"apellido",placeholder:"Apellido",name:"apellido",onChange:m})]}),Object(b.jsxs)(X.a.Group,{children:[Object(b.jsx)(X.a.Label,{children:"E-mail"}),Object(b.jsx)(X.a.Control,{type:"email",placeholder:"email@gmail.com",name:"email",onChange:m})]}),Object(b.jsxs)(X.a.Group,{children:[Object(b.jsx)(X.a.Label,{children:"Direcci\xf3n"}),Object(b.jsx)(X.a.Control,{type:"direccion",placeholder:"Calle xxx, n\xfamero 123",name:"direccion",onChange:m})]}),Object(b.jsx)(i.b,{to:"/thanks",children:Object(b.jsx)(x.a,{type:"submit",variant:"success",onClick:n,children:"Terminar compra"})})]})]})})})},ee=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(_,{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(d.a,{children:Object(b.jsx)("h1",{children:"\xa1Ya terminaste la compra!"})}),Object(b.jsx)(d.a,{children:Object(b.jsx)(i.b,{to:"/",style:{marginTop:"2%"},children:Object(b.jsx)(x.a,{variant:"success",children:"Volve a la tienda"})})})]})})})};var te=function(){return Object(b.jsx)(i.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{exact:!0,path:"/",component:R}),Object(b.jsx)(s.a,{path:"/shop",component:B}),Object(b.jsx)(s.a,{path:"/product/:id",component:M}),Object(b.jsx)(s.a,{path:"/cart",component:Y}),Object(b.jsx)(s.a,{path:"/form",component:W}),Object(b.jsx)(s.a,{path:"/thanks",component:ee})]})})})},ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,95)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))};c.a.render(Object(b.jsx)(m,{children:Object(b.jsx)(q,{children:Object(b.jsx)(te,{})})}),document.getElementById("root")),ae()}},[[83,1,2]]]);
//# sourceMappingURL=main.435a25f7.chunk.js.map