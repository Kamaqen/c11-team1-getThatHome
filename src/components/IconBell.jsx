import { RiNotification2Line } from "react-icons/ri";
import { IconBell } from "./Button";

export const IconBell = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 10px;
  cursor: pointer;
  border-radius: 50px;
  color: #616161;

  &:hover {
    background-color: #f48fb126;
  }

  &:active {
    color: #bf5f82;
  }
`;

const ParentComponent = () => {
  [isActive, setIsActive] = useState(false);

  const handleToggle = (isActive) => {
    setActive(isActive);
  };

  return <ToggleComponent onToggle={handleToggle} />;
};
