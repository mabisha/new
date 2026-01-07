import { useEffect, useState } from "react";
import ImageContainer from "../../Home/Cards/ImageContainer";
import { Helmet } from "react-helmet";
// import LoadingAnimation from "../Loading/LoadingAnimation";
import { useLocation } from "react-router-dom";
import PreLoader from "../Loading/PreLoader";
import { ReactLenis } from "lenis/react";
const PagesLayout = ({
  img,
  children,
  quotes,
  seotTitle,
  metaContent,
  breadCrumb,
  objectPosition,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => {
      clearTimeout(loadingTimer);
    };
  }, [location?.pathname]);

  return (
    <ReactLenis root options={{ smoothWheel: true, duration: 2.2 }} className>
      <div className="w-full min-h-screen h-auto flex justify-start items-start flex-col">
        <Helmet>
          <title>{seotTitle}</title>
          <meta name="description" content={metaContent} />
        </Helmet>
        <ImageContainer
          containerImage={img}
          quotes={quotes}
          breadCrumb={breadCrumb}
          objectPosition={objectPosition}
        />
        {isLoading && <PreLoader />}
        {!isLoading && children}
      </div>
    </ReactLenis>
  );
};

export default PagesLayout;
