import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomePageLayout from "./components/Home/layout/HomePageLayout";
import Admission from "./pages/Home/Admission";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/Home/NotFoundPage";
import Login from "./pages/Admin/Login/Login";
import MessageFromPrincipal from "./pages/Home/MessageFromPrincipal";
import ProtectedRoute from "./components/HOC/ProjectedRoute";
import AdminHomePage from "./components/Admin/AdminPages/AdminHomePage/AdminHomePage";
import ApprovePage from "./components/Admin/AdminPages/ApprovePage/ApprovePage";
import AddVacancy from "./pages/Admin/AddVacaniec";
import AddNewTeacher from "./components/Admin/AdminPages/AddNewTeacher/AddNewTeacher";
import UserSetup from "./components/Admin/AdminPages/UserSetup/UserSetup";
import AddNotice from "./pages/Admin/AddNotice";
// import CalendarPage from "./components/Admin/AdminPages/Calendar/Calendar";
import AddGallery from "./pages/Admin/AddGallery";
import AddPublications from "./pages/Admin/AddPublications";
import AddProject from "./components/Admin/AdminPages/AddProject/AddProject";
import AddFacility from "./pages/Admin/AddFacility";
// import Teachers from "./pages/Admin/Teachers";
import Csp from "./pages/Home/Csp";
import DetailsPage from "./pages/Home/DetailsPage/DetailsPage";
import Gallery from "./pages/Home/Gallery";
import NotificationPage from "./pages/Home/NotificationPage";
import Publications from "./pages/Home/Publications";
// import AdminForm from "./components/Admin/AdminComponents/AdminForm";
import AdminModal from "./components/Admin/AdminComponents/AdminModal";
import PublicationsForm from "./components/Admin/AdminComponents/AdminForm/PublicationsForm";
import AdminLayout from "./components/Admin/AdminLayout/AdminLayout";
import UserListForm from "./components/Admin/AdminComponents/AdminForm/UserListForm";
import Profile from "./components/Admin/AdminPages/Profile";
import DashProfileGeneral from "./components/Admin/AdminPages/Profile/DashProfileGeneral";
import DashProfileSecurity from "./components/Admin/AdminPages/Profile/DashProfileSecurity";
import FacilityForm from "./components/Admin/AdminComponents/AdminForm/FacilityForm";
import GalleryForm from "./components/Admin/AdminComponents/AdminForm/GalleryForm";
import CalendarForm from "./components/Admin/AdminComponents/AdminForm/CalendarForm";
import VacancyForm from "./components/Admin/AdminComponents/AdminForm/VacancyForm";
import TeacherForm from "./components/Admin/AdminComponents/AdminForm/TeacherForm";
import NotificationForm from "./components/Admin/AdminComponents/AdminForm/NotificationForm";
import CalendarComponent from "./components/Admin/AdminPages/Calendar/CalendarComponent";
import AddNewSms from "./components/Admin/AdminPages/AddNewSms";
import PreLoader from "./components/Home/Loading/PreLoader";
// import OauthClient from "./pages/OauthClient";
// import OurTeam from "./pages/Home/OurTeam";
const CareerPage = lazy(() => import("./pages/Home/CareerPage"));
const EventsPage = lazy(() => import("./pages/Home/EventsPage"));
const ContactPage = lazy(() => import("./pages/Home/ContactPage"));
const AboutUs = lazy(() => import("./pages/Home/AboutUs"));
const Academic = lazy(() => import("./pages/Home/Academic"));
const Cocurricular = lazy(() => import("./pages/Home/Cocurricular"));
const SocialResponsibilities = lazy(() =>
  import("./pages/Home/SocialResponsibilities")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-publications" element={<Publications />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/facilities-activities" element={<Cocurricular />} />
            <Route path="/Csp" element={<Csp />} />
            <Route path="/from-principal" element={<MessageFromPrincipal />} />
            {/* <Route path="/our-team" element={<OurTeam />} /> */}
            <Route path="/rosebud-moments" element={<Gallery />} />
            {/* <Route path="/meet-the-faculty" element={<MeetTheFaculty />} /> */}
            <Route path="/notifications" element={<NotificationPage />} />
            <Route path={`/:slug/:id`} element={<DetailsPage />} />
            <Route
              path="/social-responsibilities"
              element={<SocialResponsibilities />}
            />
            <Route path="/admission" element={<Admission />} />
            <Route path="/admission.php" element={<Admission />} />
          </Route>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/oauth2callback" component={OauthClient} /> */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<AdminHomePage />} />
            <Route path="send-sms" element={<AddNewSms />} />
            <Route
              path="approve"
              element={
                <ProtectedRoute>
                  <ApprovePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="notification"
              element={
                <ProtectedRoute>
                  <AddNotice />
                </ProtectedRoute>
              }
            >
              {" "}
              <Route
                path="new"
                element={
                  <AdminModal title="Add New Notification">
                    <NotificationForm />
                  </AdminModal>
                }
              />
              <Route
                path="edit/:noticeId"
                element={
                  <AdminModal title="Update Existing Notification">
                    <NotificationForm />
                  </AdminModal>
                }
              />
              <Route
                path="delete/:noticeId"
                element={
                  <AdminModal title="Delete Notification">
                    <NotificationForm />
                  </AdminModal>
                }
              />
            </Route>
            <Route
              path="vacancy"
              element={
                <ProtectedRoute>
                  <AddVacancy />
                </ProtectedRoute>
              }
            >
              <Route
                path="new"
                element={
                  <AdminModal title="Add New Vacancy">
                    <VacancyForm />
                  </AdminModal>
                }
              />
              <Route
                path="edit/:vacancyId"
                element={
                  <AdminModal title="Update Existing Vacancy">
                    <VacancyForm />
                  </AdminModal>
                }
              />
              <Route
                path="delete/:vacancyId"
                element={
                  <AdminModal title="Delete Vacancy">
                    <VacancyForm />
                  </AdminModal>
                }
              />
            </Route>
            <Route
              path="teacher"
              element={
                <ProtectedRoute>
                  <AddNewTeacher />
                </ProtectedRoute>
              }
            >
              {" "}
              <Route
                path="new"
                element={
                  <AdminModal title="Add New Teacher">
                    <TeacherForm />
                  </AdminModal>
                }
              />
              <Route
                path="edit/:teacherId"
                element={
                  <AdminModal title="Update Existing Teacher">
                    <TeacherForm />
                  </AdminModal>
                }
              />
              <Route
                path="delete/:teacherId"
                element={
                  <AdminModal title="Delete Teacher">
                    <TeacherForm />
                  </AdminModal>
                }
              />
            </Route>
            <Route
              path="userSetup"
              element={
                <ProtectedRoute>
                  <UserSetup />
                </ProtectedRoute>
              }
            >
              <Route
                path="new"
                element={
                  <AdminModal title="Add New User">
                    <UserListForm />
                  </AdminModal>
                }
              />
              <Route
                path="edit/:userId"
                element={
                  <AdminModal title="Update Existing User">
                    <UserListForm />
                  </AdminModal>
                }
              />
              <Route
                path="delete/:userId"
                element={
                  <AdminModal title="Delete User">
                    <UserListForm />
                  </AdminModal>
                }
              />
            </Route>

            {/* claendar */}
            <Route
              path="calendar"
              element={
                <ProtectedRoute>
                  <CalendarComponent />
                </ProtectedRoute>
              }
            >
              <Route
                path="new"
                element={
                  <AdminModal title="Add New Event">
                    <CalendarForm />
                  </AdminModal>
                }
              />
              <Route
                path="edit/:calendarId"
                element={
                  <AdminModal title="Update Existing Event">
                    <CalendarForm />
                  </AdminModal>
                }
              />
              <Route
                path="delete/:calendarId"
                element={
                  <AdminModal title="Delete Event">
                    <CalendarForm />
                  </AdminModal>
                }
              />
            </Route>
            <Route
              path="gallery"
              element={
                <ProtectedRoute>
                  <AddGallery />
                </ProtectedRoute>
              }
            >
              <Route
                path="new"
                element={
                  <AdminModal title="Add New Gallery">
                    <GalleryForm />
                  </AdminModal>
                }
              />{" "}
              <Route
                path="view/:galleryId"
                element={
                  <AdminModal title="View Gallery">
                    <GalleryForm />
                  </AdminModal>
                }
              />
              <Route
                path="edit/:galleryId"
                element={
                  <AdminModal title="Update Existing Gallery">
                    <GalleryForm />
                  </AdminModal>
                }
              />
              <Route
                path="delete/:galleryId"
                element={
                  <AdminModal title="Delete Gallery">
                    <GalleryForm />
                  </AdminModal>
                }
              />
            </Route>

            {/* publication */}
            <Route
              path="publication"
              element={
                <ProtectedRoute>
                  <AddPublications />
                </ProtectedRoute>
              }
            >
              <Route
                path="new"
                element={
                  <AdminModal title="Add New Publication">
                    <PublicationsForm />
                  </AdminModal>
                }
              />
              <Route
                path="edit/:publicationId"
                element={
                  <AdminModal title="Update Existing Publication">
                    <PublicationsForm />
                  </AdminModal>
                }
              />
              <Route
                path="delete/:publicationId"
                element={
                  <AdminModal title="Delete Publication">
                    <PublicationsForm />
                  </AdminModal>
                }
              />
            </Route>

            {/* facility */}
            <Route
              path="facility"
              element={
                <ProtectedRoute>
                  <AddFacility />
                </ProtectedRoute>
              }
            >
              <Route
                path="new"
                element={
                  <AdminModal title="Add New Facility">
                    <FacilityForm />
                  </AdminModal>
                }
              />
              <Route
                path="edit/:facilityId"
                element={
                  <AdminModal title="Update Existing Facility">
                    <FacilityForm />
                  </AdminModal>
                }
              />
              <Route
                path="delete/:facilityId"
                element={
                  <AdminModal title="Delete Facility">
                    <FacilityForm />
                  </AdminModal>
                }
              />
            </Route>

            <Route
              path="faculty"
              element={
                <ProtectedRoute>
                  <AddFacility />
                </ProtectedRoute>
              }
            />
            {/* projects  route */}
            <Route
              path="projects"
              element={
                <ProtectedRoute>
                  <AddProject />
                </ProtectedRoute>
              }
            />

            {/* profile */}
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              <Route path="" element={<Navigate to="general" replace />} />
              <Route path="general" element={<DashProfileGeneral />} />
              <Route path="security" element={<DashProfileSecurity />} />{" "}
            </Route>
          </Route>
        </Routes>{" "}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
