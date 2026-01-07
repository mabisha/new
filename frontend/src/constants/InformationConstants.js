import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const PHONE_NUMBER = ["01-4793003,", "01-4790923,", "01-4792443"];
const EMAIL = "info@rosebudschoolnepal.org";
const LOCATION = [
  "32 Rudramati Marg 1, Buddha Nagar 10,",
  " Kathmandu,",
  "Nepal",
];

const SOCIALS = [
  {
    name: "facebook",
    icon: FacebookIcon,
    link: "https://www.facebook.com/rosebudkathmandu",
    facebook: "#1877f2",
  },

  {
    name: "instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/rosebudschoolnepal/",
    instagram: "#c32aa3",
  },
  {
    name: "youtube",
    icon: YouTubeIcon,
    link: "https://www.youtube.com/channel/UCEJKhQ6cFBZLbOOJoQ4gULw",
    youtube: "#ff0000",
  },
];
const SOCIAL_URL = {
  facebook: {
    icon: FacebookIcon,
    link: "https://www.facebook.com/rosebudkathmandu",
    color: "#1877f2",
  },
  instagram: {
    icon: InstagramIcon,
    link: "https://www.instagram.com/rosebudschoolnepal/",
    color: "#c32aa3",
  },
  youtube: {
    icon: YouTubeIcon,
    link: "https://www.youtube.com/channel/UCEJKhQ6cFBZLbOOJoQ4gULw",
    color: "#ff0000",
  },
};
export { PHONE_NUMBER, EMAIL, LOCATION, SOCIALS, SOCIAL_URL };
