import { useEffect } from "react";

const MessengerChatBot = () => {
  useEffect(() => {
    // Your SDK code
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v19.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    // Function to toggle navbar
    function toggleNavbar(collapseID) {
      const collapseElement = document.getElementById(collapseID);
      if (collapseElement) {
        collapseElement.classList.toggle("hidden");
        collapseElement.classList.toggle("block");
      }
    }
  }, []);

  return (
    <div>
      <div id="fb-root"></div>

      {/* Your Chat Plugin code */}
      <div id="fb-customer-chat" className="fb-customerchat"></div>

      {/* Your Chat Plugin initialization */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          var chatbox = document.getElementById("fb-customer-chat");
          chatbox.setAttribute("page_id", "148434565031183");
          chatbox.setAttribute("attribution", "biz_inbox");
        `,
        }}
      />
    </div>
  );
};

export default MessengerChatBot;
