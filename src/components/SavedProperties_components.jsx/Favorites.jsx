import { useEffect, useState } from "react";
import { getSavedProperties } from "../../services/user-properties-services";
import CardComponent from "../CardComponent";
import CardList from "../Cardlist";

const Favorites = () => {
  const [data, setData] = useState();

  useEffect(() => {
    if (localStorage.getItem("savedPropertiesData")) {
      setData(JSON.parse(localStorage.getItem("savedPropertiesData")));
    }
    getSavedProperties().then((res) => {
      setData(res);
      localStorage.setItem("savedPropertiesData", JSON.stringify(res));
    });
  }, []);

  const DataLength = data?.length;

  return (
    <>
      <CardList length={DataLength}>
        {data?.map((item) => (
          <CardComponent
            key={crypto.randomUUID()}
            id={item.id}
            img={item.urls}
            rent={new Intl.NumberFormat().format(item.rent_value)}
            property_price={new Intl.NumberFormat().format(item.property_price)}
            operation={item.operation_type}
            type={item.property_type}
            address={item.address}
            bed={item.bedrooms}
            bath={item.bathrooms}
            area={item.area}
            pet={item.pet_friendly}
          />
        ))}
      </CardList>
    </>
  );
};

export default Favorites;
