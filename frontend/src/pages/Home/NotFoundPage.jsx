import ErrorStatusPage from "../../components/Home/ErrorStatus";
import notFound from "../../assets/notFound.jpg";

const NotFound = () => (
  <ErrorStatusPage
    title="Page Not Found"
    description="The page you are looking for does not exist or has been moved."
    image={notFound}
  />
);

export default NotFound;
