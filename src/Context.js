import React, {
  useState,
  useCallback,
  useEffect,
  useContext,
  createContext,
} from "react";
import items from "./Data";

const url =
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,sexist&type=single";

const MyContext = createContext();

export const MyAppProvider = ({ children }) => {
  const [myRooms, setMyRooms] = useState([]);
  const [mySortedRooms, setMySortedRooms] = useState([]);
  const [myFeaturedRooms, setMyFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputs, setMyInputs] = useState({
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    pets: false,
    breakfast: false,
  });
  const [jokes, setJokes] = useState([]);
  const formatingData = (items) => {
    const tempData = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => {
        return image.fields.file.url;
      });
      const room = { ...item.fields, id, images };
      return room;
    });
    return tempData;
  };
  const SettingData = useCallback(async () => {
    let rooms = formatingData(items);
    const featuredroom = rooms.filter((room) => room.featured === true);
    const maxPrice = Math.max(...rooms.map((room) => room.price));
    const maxSize = Math.max(...rooms.map((room) => room.size));
    setMyRooms(rooms);
    setMyFeaturedRooms(featuredroom);
    setMySortedRooms(rooms);
    setLoading(true);
    setMyInputs((previous) => {
      return { ...previous, maxPrice: maxPrice, maxSize: maxSize };
    });
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      // console.log(jsonResponse);
      if (jsonResponse) {
        const { joke } = jsonResponse;
        setJokes(joke);
        // console.log(joke);
      } else {
        setJokes([]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    SettingData();
  }, [SettingData]);

  //Filtering single rooms
  const singleRoom = (slug) => {
    const single = myRooms.filter((room) => room.slug === slug);
    return single;
  };
  const HandleInputs = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setMyInputs((previous) => {
      return { ...previous, [name]: value };
    });
  };
  const FilterRooms = useCallback(() => {
    let { type, capacity, minSize, maxSize, price, breakfast, pets } = inputs;
    capacity = parseInt(capacity);
    price = parseInt(price);

    let tempRooms = [...myRooms];
    //filtering by types
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    //filtering by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    //filtering by price
    tempRooms = tempRooms.filter((room) => room.price >= price);
    //filtering by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    //filtering by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    //filtering by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }
    setMySortedRooms(tempRooms);
    console.log("Hello world");
  },[inputs, myRooms]);
  useEffect(() => {
    FilterRooms();
  }, [inputs, FilterRooms]);
  // console.log(jokes);
  return (
    <MyContext.Provider
      value={{
        myRooms,
        myFeaturedRooms,
        mySortedRooms,
        ...inputs,
        loading,
        jokes,
        HandleInputs,
        singleRoom,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const MyGlobalProvider = () => {
  return useContext(MyContext);
};
