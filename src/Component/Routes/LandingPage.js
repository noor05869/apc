import React from "react";
function LandingPage() {
  return (
    <div>
      <section class="herosection">
        <div class="videocontainer">
          <div
            data-poster-url="https://vimeo.com/679939797.mp4"
            data-video-urls="https://vimeo.com/679939797.mp4"
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            id="video"
            class="herovideo w-background-video w-background-video-atom"
          >
            <video
              autoplay=""
              loop=""
            //   style='background-image: url("https://global-uploads.webflow.com/62135fdbd85a60c2f528095e/621c745506cdd44dc3a4255d_NEXT CAPITAL VIDEO HD_Trim_Trim-poster-00001.jpg");'
              muted=""
              playsinline=""
              data-wf-ignore="true"
              data-object-fit="cover"
            >
            <source
              src="../../Images/landvedio.mp4"
              data-wf-ignore="true"
            />
            <source
              src="../../Images/landvedio.mp4"
              data-wf-ignore="true"
            />
            </video>
          </div>
        </div>
        <div class="contentcontainer">
          <div class="wrapper">
            <div class="herocopy">
              <h1 class="h1 white">
                Welcome to Pakistan’s leading investment bank.
              </h1>
            </div>
            <div class="buttoncontainer">
              <a href="/downloads" class="primarybutton w-button">
                Open your account
              </a>
              <div>
                <a
                  href="#"
                  class="secondarybutton lm16 w-inline-block w-lightbox"
                  aria-label="open lightbox"
                  aria-haspopup="dialog"
                >
                  <div class="text-block">Watch Video</div>
                </a>
              </div>
            </div>
            <div class="herovideo-button">
              <a id="video-toggle" href="#" class="pp-button w-inline-block">
                <img
                  src="https://global-uploads.webflow.com/62135fdbd85a60c2f528095e/622aca3e695ed16fe2b9d1ee_PlayPauseIcon.png"
                  loading="lazy"
                  alt="This is a play pause icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
