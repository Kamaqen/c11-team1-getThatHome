import CardComponent from "../CardComponent";
import CardList from "../Cardlist";

export const ClosedProperties = ({ data, onClose }) => {
  const activeProperties = data.filter(
    (property) => property.is_active === false
  );

  const DataLength = activeProperties?.length;

  return (
    <div>
      <CardList length={DataLength}>
        {activeProperties?.map((item) => (
          <CardComponent
            key={item.id}
            id={item.id}
            img={item.urls}
            description={item.description}
            property_price={new Intl.NumberFormat().format(item.property_price)}
            maintenance={item.maintenance_price}
            rent={new Intl.NumberFormat().format(item.rent_value)}
            operation={item.operation_type}
            type={item.property_type}
            address={item.address}
            bed={item.bedrooms}
            bath={item.bathrooms}
            area={item.area}
            pet={item.pet_friendly}
            userId={item.user_id}
            active={item.is_active}
            footer={"footer"}
            onClose={onClose}
          />
        ))}
      </CardList>
    </div>
  );
};
