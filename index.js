

let text=""
     
 const productList = [
{
    model: '10X Silicone Vibrating Egg Black',
    image: '1.jpg',
    price:'49.40',
    Id: 1,
    description:'This powerful vibrating egg features a deep indentation to provide a <br>satisfying edge meant to enhance the strong buzzing from this silky<br> smooth delight! Enjoy 10 powerful vibrating functions, controllable with the <br>included wireless remote control. The small size of this vibe hides its<br> remarkable strength, perfect for a solo sesh to end your day or with your <br> lover to add some exciting buzzing to your intimate moments together!<br> The included wireless remote controller lets you play from a distance - <br> stuff your partners pants with this velvety egg and buzz them when they <br> least expect it! Play around the home, in the car, or even in public if you <br> dare. The wireless controller lets you control the egg during sex with ease<br> and even makes solo play a breeze if it is just you tonight. Safe and <br>  convenient, this silicone egg from Bang! features a sturdy pull cord for <br> easy retrieval, and is constructed with phthalate-free silicone for a body-<br> safe experience. The IPX5 waterproof design also makes this egg shower <br>  friendly and easy to clean with warm water and mild soap. USB <br> rechargeable so the fun never ends plug in the included USB charging <br> cable for a quick charge so you can play as soon as the mood strikes!',
},
{
    model: '10X Silicone Vibrating Egg Pink',
    image: '2.jpg',
    price: '49.40',
    Id: 2,
    description:'This powerful vibrating egg features a deep indentation to provide a <br>satisfying edge meant to enhance the strong buzzing from this silky<br> smooth delight! Enjoy 10 powerful vibrating functions, controllable with the <br>included wireless remote control. The small size of this vibe hides its<br> remarkable strength, perfect for a solo sesh to end your day or with your <br> lover to add some exciting buzzing to your intimate moments together!<br> The included wireless remote controller lets you play from a distance - <br> stuff your partners pants with this velvety egg and buzz them when they <br> least expect it! Play around the home, in the car, or even in public if you <br> dare. The wireless controller lets you control the egg during sex with ease<br> and even makes solo play a breeze if it is just you tonight. Safe and <br>  convenient, this silicone egg from Bang! features a sturdy pull cord for <br> easy retrieval, and is constructed with phthalate-free silicone for a body-<br> safe experience. The IPX5 waterproof design also makes this egg shower <br>  friendly and easy to clean with warm water and mild soap. USB <br> rechargeable so the fun never ends plug in the included USB charging <br> cable for a quick charge so you can play as soon as the mood strikes!',
    },
{
    model: 'Sono No.88 Vibrating Rechargeable Cock Ring',
    image: '3.jpg',
    price: '58.40',
    Id: 3,
    description:'Are you looking for a cockring that feels comfortable and tight at the<br> same time? Look no further, because this is what you have been<br> looking for! This cockring will give your penis the desired rock hard strength<br> and will obviate premature ejaculation! Its little tail will gently<br> massage your perineum and your partner will love the stimulation shapes<br> due to its silicone material that will adjust to your body temperature very<br> quickly!',

},
{
    model: 'Sono No.92 Reversible Masturbator And Bumper',
    image: '4.jpg',
    price: '14.60',
    Id: 4,
    description:'Made from super-smooth and flexible TPE the open-ended masturbator can be<br> effortlessly flipped inside out. Easy-to-use, easy-to-clean, and perfect for solo or <br> partner play. The inner diameter measures 2cm, 0.79 inches, the outer diameter 6.2cm, 2.45. <br> inches and the total height 4cm, 1.58 inches. The masturbator can also be<br>  used as a bumper to stop full penetration for those who experience <br> discomfort during intercourse, making it more enjoyable. The partner<br>  penetrating will still have the sensation of full insertion without having to try and hold back. Before use,<br>  it is recommendable to lubricate yourself and<br>  the inside of the stroker with sufficient water-based lube for the best and most <br> satisfying result!',
    },
{
    model: 'Pride Pleasure Plug Rainbow Medium',
    image: '5.jpg',
    price: '67.30',
    Id: 5,
    description: 'Pride Edition Plugs Rainbow Colours plugs made of satin-smooth, platinum silicone.<br> Suction Base. Suitable with all lubricants. Show your colours and your pride.',
    },
{
    model: 'Steel Beaded Silicone Ring XL',
    image: '6.jpg',
    price: '10.10',
    Id: 6,
    description: 'Made to enhance, escalate and intensify ecstasy every time you slip<br> on the Large Steel Beaded Silicone Ring. The sturdy, yet stretchy silicone ring supports <br> while the steel pleasure beads thrill you and your lover. The ultra stretchy and comfortable <br> ring is sure to enhance pleasure by increasing stamina, sensitivity and girth. <br> Look forward to an explosive pleasure experience with every teasing stroke of the steel pleasure beads. This<br> strong, supportive ring indulges your man with increased stamina, girth <br> and sensitivity, while you can savour his increase stamina and girth, the thrilling stimulation<br> beads tease you towards an orgasmic wonderland. The passionate <br>pleasure ring is made of silicone and stainless steel pleasure beads.',
    },
{
    model: 'Pink Rechargeable Mini Miracle Massager',
    image: '7.jpg',
    price: '51.60',
    Id: 7,
    description: 'The travel-ready Rechargeable Mini Miracle Massager takes care of all your needs with an ultra-plush silicone<br> body, 20 functions of vibration, and deep rumbling power.Restore your pleasure or <br>sore muscles with the versatile design and wide flexible head. Use<br> the easy-button control pad to cycle through the 20 knee-shaking settings <br>or use the secure travel lock feature to take your passion to-go. While <br>the easy-touch button controls the intensity and the vibe gives you the stimulation you want, <br>the integrated state of the art memory chip remembers just how you like it by starting on<br> the last function used.',
    },
{
    model: 'Kiiroo Interactive Couple Set Titan and Clion',
    image: '8.jpg',
    price: '264.80',
    Id: 8,
    description:'TITAN and Cliona by KIIROO are a match made in heaven. TITAN is a handheld stroker with touch-sensitive technology. <br>Cliona is a handheld clitoral stimulator with touch-sensitive technology. Both <br>toys drive each other wild. TITAN As the first solo branded product by KIIROO, TITAN<br> sports a real-feel sleeve and 9 vibrating bullets that intensify your masturbatory experience.<br>Play alone and enjoy the many different modes and speeds that TITAN has to <br>offer.Cliona Cliona By KIIROO is a highly advanced touch-sensitive clitoral massager <br>that allows for two-way pleasure online. It is powerful, waterproof, and pocket-sized so it is<br> the perfect travel companion.',
    },
{
    model: 'Twitch Silver Hands Free Suction And Vibration Toy',
    image: '9.jpg',
    price: '80.90',
    Id: 9,
    description: 'This hands-free, beautifully designed, small, and innovative toy will help you get your body<br> ready for new and enjoyable sexual experiences! Not only will users enjoy increased blood flow to the<br>  clitoris but this sleek toy will also encourage vaginal lubrication making <br> it your best friend for foreplay and beyond. The body-safe cup, with 2 tongues and several tantalizing miniature hairs, fits<br>  perfectly over the clitoris, creating a gentle suction that boosts blood flow and increases <br> sensitivity in the clitoral region to achieve the most intense orgasms you have ever had.',
    },
{
    model: 'Tenga Crysta Block Masturbator',
    image: '10.jpg',
    price: '60.50',
    Id: 10,
    description: 'It is almost a shame to use it for masturbation!<br> Tenga has created more than just a great experience for<br> the penis with the masturbators in the Crysta line. They <br>have created a masterpiece with the designs that every style-conscious person can place <br>in their living room.The masturbator is transparent and has <br>a stimulating texture inside the canal that intensely stimulates the penis. <br>A further level of stimulation can be created by squeezing the sides <br>because this adds more pressure to the 3D elements and can lead to <br>explosive orgasms.',
    },
{
    model: 'Remote Control Icon Superbe Couples Massage',
    image: '11.jpg',
    price: '77.00',
    Id: 11,
    description: 'The Icon Superbe couples massager by TOYJOY Designer Edition is <br>the perfect blend of state-of-the-art functionality and non-intimidating, elegant aesthetics. <br>Use it for sensual solo play, move it all over your partners erogenous zones during <br>a sexy full-body massage or slip it around the shaft<br> of the penis for mind-blowing dual-stimulation during lovemaking.',
    },
{
    model: 'AmyRose Love Doll',
    image: '12.jpg',
    price: '41.60',
    Id: 12,
    description:'Naughty AmyRose with a printed-on face and hair and hungry mouth<br> to enhance your climax.Let AmyRose<br> show you how it is done. She is the best beginner doll for any man! She<br> has a lot to offer three love holes mouth, vagina and anus, <br>she  always ready and willing to satisfy you.',
     },];
 
let productElement=""
for (x = 0; x < productList.length; x++) {
     productElement=productElement+`
     <div class="toys" >
     <div id="a21" class="content image" >
        <img id="a21_img" class="img " onClick="showDetailView(${productList[x].Id} )" src="${productList[x].image}" tabindex="0">
    </a>
  </div>
<div id="a22" class="toys">
    <div id="a22_text" class="text ">
        <p><span>${productList[x].model}</span></p>
    </div>
   </div>
   

<div id="a23" class="toys">
    <div id="a23_text" class="text ">
        <p><span>&#8364 ${productList[x].price}</span></p>
    </div>
</div>
</div>
</div>`
      }
let dataPage1 = document.querySelector('#dataPage1')   

dataPage1.innerHTML=productElement

 




//cartButton


//function clickHandler(){
//consol.log ("Click on image");

    

//Page2

function showDetailView(productElementId) {
    console.log(productElementId);
   const productDetails = productList.find(productElement => productElement.Id ===  productElementId);

   document.querySelector('#dataPage1').style.display = "none";
   document.querySelector('#Page1').style.display = "none";
   document.querySelector('#b1').style.display = "none";

   
   let dataPage2 = document.querySelector('#dataPage2');
   dataPage2.innerHTML = `<div class="container">
    <div>
        <img class="pic" src="${productDetails.image}">
    </div>
    <div class="item">
        <h2>${productDetails.model}</h2>
        <span style="color:red"><b>&#8364 ${productDetails.price}</b></span> <br>
        <span style="color:green">In stock</span>
        <p>
        ${productDetails.description}
        </p>
        <div class="qty">Quantity:</div>
        <input id="numbercount" type="number" name="quantity" min="1" value="0" max="10"><br>
        <button onclick="cartPage()" style=""id="addcart" type="button" title="add to cart"><span>Add To Cart</span></button> <br>
        <button id="saveitem" type="button" title="Save Item"><span>Save Item</span></button>
   </div> </div>`;

   
   }
     let cartArray = [];
     let quantitiesArray = [];


   //ProductCart

   function cartPage(productCartId) {
    console.log(productCartId);
   const productInfo = productList.find(productElement => productElement.Id ===  productCartId);


    document.querySelector('#dataPage1').style.display = "none";
    document.querySelector('#Page1').style.display = "none";
    document.querySelector('#b1').style.display = "none";
    document.querySelector('#dataPage2').style.display = "none";

    
       
    let productCart = "";
        productCart.innerHTML = `
        <div class="container">
        <div class="itemCart">
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                <tr class="cartProduct">
                <td>${productInfo.model}</td>
                <td></td>
                <td></td>
             
             
           <td><button id="remove" style="cursor: pointer;" type="button"<i class="far fa-trash-alt"></i></button></td>
            
           
           </tr>
            <tr>
                <td>
                    <img class="cart-items" src="${productInfo.image}">
                </td>
                <td>&#8364 ${productInfo.price}</td>
                <td>
                    <input type="number" name="quantity" min="1" value="1" max="10">
                </td>
                <td>&#8364 ${productInfo.price}</td>
            </tr>

    <div id="summary" >
    <h1 class="bom">Summary</h1>
    <p>Estimated Shipping and Tax</p>
    <label for="country">Country</label><br>
    <select name="Country" id="Country">
        <option value="finland">Finland</option>
        <option value="estonia">Estonia</option>
        <option value="france">France</option>
        <option value="germany">Germany</option>
    </select><br><br>
    <label for="state/province">State/Province</label><br>
    <select name="Country" id="Country">
        <option value="espoo">Espoo</option>
        <option value="helsinki">Helsinki</option>
        <option value="oulu">Oulu</option>
        <option value="tampere">Tampere</option>
    </select><br><br>
    <label for="zip/postalcode">Zip/Postal Code</label><br>
    <input type="text" id="zippostalcode"><br><br>
    <div>
        <input type="radio" name="shipping" checked valve="normalmail"> Normal Mail<br>
        <input type="radio" name="shipping" value="expressmail"> Express Mail
        <br>
        <hr class="line">
        <div>
            <span class="subtotal">Subtotal</span>
        </div>
        
        <div class="ordertotal">
            <span><b>Order Total</b></span>
        </div>
        <div class="totalprice"><b>&#8364 ?</b></div>
        <hr class="line">
        <label for="discount">Apply Discount Code</label><br>
        <input type="text" id="discount">
        <br><br>
        <input class="apply" type="submit" value="Apply">
        <div>
            <input class="checkout" type="submit" value="Process to Checkout">
        </div>
    </div>
</div>
        `;
        let removeCartItemButtons = document.querySelector('#remove');
        console.log(removeCartItemButtons);
        for ( let i = 0; i < removeCartItemButtons.length; i++){
        let button = removeCartItemButtons[i];
        button.addEventListener('click', function (event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        })}

   }

  
   let productCart = document.querySelector('#cartPage');  
   productCart.innerText = productCart     
  
   

  

