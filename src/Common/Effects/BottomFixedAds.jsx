import React, {useState, useEffect} from 'react'

function BottomFixedAds() {

    const [bottom, setBottom] = useState(false);


    function OnScroll() {
        setBottom(window.pageYOffset);
      }

      useEffect(() => {
        function ScrollingHandeler() {
          window.addEventListener("scroll", OnScroll);
        }
        ScrollingHandeler();
        return () => {
          window.removeEventListener("scroll", OnScroll);
        };
      });

    return (
        <>
            <div class={bottom ? "bottom__ads__wrapper active" : "bottom__ads__wrapper"}>
                <div class="bottom__ads">
                    <img src="assets/images/img/banner.jpg" class="img-fluid" alt="Bottom ads" />
                    <span id="closeBottom"><i class="fas fa-times"></i></span>
                </div>
            </div>
        </>
    )
}

export default BottomFixedAds
