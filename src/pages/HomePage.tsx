import RoomsList from "../client/rooms/components/RoomList";
import { RoomsProvider } from "../client/rooms/hooks/useRooms";
import Footer from "../components/Footer";
import Header from "../components/Headet";

function HomePage() {
  return (
    <>
      <Header />
      <RoomsProvider>
        <RoomsList />
      </RoomsProvider>
      <Footer />
    </>
  );
}
export default HomePage;
