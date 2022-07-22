


function navbar (){
  return `<div id="logo">
  <a href="home.html"><img src="https://www.firstpost.com/static/images/fp-desk-logo.png" alt=""></a>
</div>

<div id="social-icons"><a href="https://www.facebook.com/firstpostin"
><img
class="social-img"
src="https://cdn-icons.flaticon.com/png/128/4494/premium/4494475.png?token=exp=1658326922~hmac=c8c6d55b2ffe58965810af2fa71246f9"
alt=""
/></a>
<a href="https://twitter.com/firstpost"
><img
class="social-img"
src="https://cdn-icons.flaticon.com/png/128/4494/premium/4494477.png?token=exp=1658326922~hmac=7a2556e510482d5a5a665863b3ff6699"
alt=""
/></a>
<a href="https://www.instagram.com/firstpost/"
><img
class="social-img"
src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
alt=""
/></a>
<a
href="https://www.youtube.com/channel/UCz8QaiQxApLq8sLNcszYyJw/featured"
><img
class="social-img"
src="https://cdn-icons-png.flaticon.com/128/187/187209.png"
alt=""
/></a></div>

<div id="line">1</div>

<div id="search-box">
<img src="" alt="">
<input id="search-id"type="text" placeholder="Search..."</input>
</div>`
}

function sidebar(){
  return ` <p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">


  </button>
</p>
<div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" style="width: 300px; height:690px">
    
      <div id="menu-subsection">
        <div class="sub-more">
          <img  class="sub-more-img" src="https://cdn-icons-png.flaticon.com/128/3603/3603038.png" alt="">
          <p>Sections</p>
        </div>
        <div class="sub-more">
          <img  class="sub-more-img" src="https://cdn-icons-png.flaticon.com/128/126/126498.png" alt="">
          <p>More</p>
        </div>
        <div class="sub-more">
          <img  class="sub-more-img" src="https://cdn-icons.flaticon.com/png/128/3410/premium/3410926.png?token=exp=1658417828~hmac=bbecce3924d903c06f83e18c978e13ae" alt="">
          <p>Shows</p>
        </div>
        <div class="sub-more">
          <img  class="sub-more-img" src="https://cdn-icons.flaticon.com/png/128/3178/premium/3178405.png?token=exp=1658417880~hmac=9da6a85e18963ea52ba19c6a5fa0f0cc" alt="">
          <p>F.Brands</p>
        </div>
    </div>
     <div id="all-pages">
      <div class="abcd"><h6>Home</h6></div>
      <div class="abcd"><h6>Health</h6></div>
      <div class="abcd"><h6>India</h6></div>
      <div class="abcd"> <h6>World</h6></div>
      <div class="abcd"><h6>Politics</h6></div>
      <div class="abcd"><h6>Auto</h6></div>
      <div class="abcd"><h6>Opinion</h6></div>
      <div class="abcd"> <h6>Sports</h6></div>
      <div class="abcd"><h6>Cricket</h6></div>
      <div class="abcd"><h6>Entertainment</h6></div>
      <div class="abcd"><h6>Tech</h6></div>
      <div class="abcd"><h6>Photos</h6></div>
      <div class="abcd"><h6>Videos</h6></div>
      <div class="abcd"><h6>Bussiness</h6></div>
     </div>


      <div id="social-icons-sidemenu">
        <a href="https://www.facebook.com/firstpostin"
  ><img
    class="social-img"
    src="https://cdn-icons.flaticon.com/png/128/4494/premium/4494475.png?token=exp=1658326922~hmac=c8c6d55b2ffe58965810af2fa71246f9"
    alt=""
/></a>
<a href="https://twitter.com/firstpost"
  ><img
    class="social-img"
    src="https://cdn-icons.flaticon.com/png/128/4494/premium/4494477.png?token=exp=1658326922~hmac=7a2556e510482d5a5a665863b3ff6699"
    alt=""
/></a>
<a href="https://www.instagram.com/firstpost/"
  ><img
    class="social-img"
    src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
    alt=""
/></a>
<a
  href="https://www.youtube.com/channel/UCz8QaiQxApLq8sLNcszYyJw/featured"
  ><img
    class="social-img"
    src="https://cdn-icons-png.flaticon.com/128/187/187209.png"
    alt=""
/></a>
      </div>
    </div>
  </div>
</div>`;
}

function category(){
  return ` <div id="category1">
  <p class="change-color">Health |</p>
<p class="change-color">India |</p>
<p class="change-color">World |</p>
<p class="change-color">Politics |</p>
<p class="change-color">Auto |</p>
<p class="change-color">Opinion |</p>
<p class="change-color">Sports |</p>
<p class="change-color">Cricket |</p>
<p class="change-color">Entertainment |</p>
<p class="change-color">Tech |</p>
</div>

<div id="other-logo">
  <div>
  <a href="https://www.firstpost.com/powering-life">
    <strong id="volvo">#VOLVO</strong>
  </a>
  </div>
  <div>
 <a href="https://www.firstpost.com/tag/cryptocurrency">
  <strong id="crypto">Crypto</strong>
 </a>
   </div>
   <div id="netra">
   <a href="https://www.news18.com/netrasuraksha/">
    <img src="https://www.firstpost.com/static/images/netrasuraksha_L2_103x25px.jpg" alt="">
   </a>
   </div>
</div>`;
}

export {navbar,sidebar,category};