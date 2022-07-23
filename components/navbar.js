function navbar() {
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
</div>`;
}

function sidebar() {
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
          <img  class="sub-more-img" src="https://cdn-icons-png.flaticon.com/128/3566/3566955.png" alt="">
          <p>Shows</p>
        </div>
        <div class="sub-more">
          <img  class="sub-more-img" src="https://cdn-icons-png.flaticon.com/128/3388/3388797.png" alt="">
          <p>F.Brands</p>
        </div>
    </div>
     <div id="all-pages">
      <div class="abcd"><a href="home.html"><h6>Home</h6></a></div>

      <div class="abcd"><a href="health.html"><h6>Health</h6></a></div>

      <div class="abcd"><a href="india.html"><h6>India</h6></a></div>

      <div class="abcd"><a href=""><h6>Home</h6></a></div>

      <div class="abcd"><a href=""><h6>Politics</h6></a></div>

      <div class="abcd"><a href=""><h6>Auto</h6></a></div>

      <div class="abcd"><a href=""><h6>Opinion</h6></a></div>
      
      <div class="abcd"><a href=""><h6>Sports</h6></a></div>

      <div class="abcd"><a href=""><h6>Cricket</h6></a></div>

      <div class="abcd"><a href=""><h6>Entertainment</h6></a></div>

      <div class="abcd"><a href=""><h6>Tech</h6></a></div>

      <div class="abcd"><a href=""><h6>Photos</h6></a></div>

      <div class="abcd"><a href=""><h6>Videos</h6></a></div>

      <div class="abcd"><a href=""><h6>Bussiness</h6></a></div>
      
     </div>


      <div id="social-icons-sidemenu">
        <a href="https://www.facebook.com/firstpostin"
  ><img
    class="social-img"
    src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
    alt=""
/></a>
<a href="https://twitter.com/firstpost"
  ><img
    class="social-img"
    src="https://cdn-icons-png.flaticon.com/128/145/145812.png"
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

function category() {
  return ` <div id="category1">

  <a href="health.html"><p class="change-color">Health |</p></a>

  <a href="india.html"><p class="change-color">India |</p></a>

  <a href=""><p class="change-color">World |</p></a>

  <a href=""><p class="change-color">Politics |</p></a>

  <a href=""><p class="change-color">Auto |</p></a>

  <a href=""><p class="change-color">Opinion |</p></a>

  <a href=""><p class="change-color">Sports |</p></a>

  <a href=""><p class="change-color">Cricket |</p></a>

  <a href=""><p class="change-color">Entertainment |</p></a>

  <a href=""><p class="change-color">Tech |</p></a>











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

export { navbar, sidebar, category };
