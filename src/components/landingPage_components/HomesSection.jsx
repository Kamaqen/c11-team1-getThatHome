import Section from "../Section";
import CardComponent from "../CardComponent";

const HomesSection = ({ data }) => {
  const threeFirst = data ? data.slice(0, 3) : [];
  return (
    <Section>
      <p className="mb-md">Find an Apartment you Love</p>
      <p className="headline4 pink mb-md">
        Homes for rent and sale at the best prices
      </p>
      <div className="flex flex-row gap-xl">
        {threeFirst.map((item, index) => (
          <CardComponent
            key={index}
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
      </div>
    </Section>
  );
};

export default HomesSection;
