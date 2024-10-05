import SingleDropdown from "./SingleDropdown";


const Dropdown: React.FC<NestedDropdownProps> = ({ items }) => {
    return (
        <div className="flex space-x-4">
            {items.map((item, index) => (
                <SingleDropdown key={index} item={item} depth={0} />
            ))}
        </div>
    );
};

export default Dropdown;
