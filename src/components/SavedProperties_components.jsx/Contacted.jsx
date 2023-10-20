import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getContactedProperties } from "../../services/user-properties-services";
import CardComponent from "../CardComponent";
import CardList from "../Cardlist";

const Contacted = () => {
  const [data, setData] = useState();

  useEffect(() => {
    if (localStorage.getItem("contactedPropertiesData")) {
      setData(JSON.parse(localStorage.getItem("contactedPropertiesData")));
    }
    getContactedProperties().then((res) => {
      setData(res);
      localStorage.setItem("contactedPropertiesData", JSON.stringify(res));
    });
  }, []);

  const DataLength = data?.length;

  return (
    <>
      <CardList length={DataLength}>
        {data?.map((item) => (
          <CardComponent
            key={item.id}
            img={item.urls}
            price={item.rent_value}
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

export default Contacted;
