import Maps from "./Maps";

const LocationSection = ({ address }) => {
    return (
        <div className="flex flex-column gap-md">
            <p className="headline6 pink">Location</p>
            <Maps address={address} />
        </div>
    );
};

export default LocationSection;
