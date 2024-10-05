import { useState } from "react";
import { useModalStore } from '@/app/store/modals';

const SingleDropdown: React.FC<SingleDropdownProps> = ({ item, depth }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const hasSubItems = (item: MenuItem): item is MenuItem & { items: MenuItem[] } => {
        return Array.isArray(item.items) && item.items.length > 0;
    };

    const { handleClick } = useModalStore();

    return (
        <div
            className="relative"
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                onClick={handleClick}
                onMouseEnter={() => setIsOpen(true)}
                id={item.label}
                className={`
            flex items-center justify-between w-full px-4 py-2 text-sm  text-gray-50 hover:bg-teal-700 hover:border rounded-lg border-none
            ${depth === 0 ? 'bg-teal-950' : 'bg-teal-900'}
          `}
            >
                {item.label}
                {hasSubItems(item) && (
                    <svg
                        className={`w-4 h-4 ml-2 ${depth === 0 ? '' : '-rotate-90'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </button>

            {hasSubItems(item) && isOpen && (
                <div
                    className={`
              absolute z-10 ${depth === 0 ? 'top-full' : 'left-full top-0'}
              min-w-[200px] py-1 bg-teal-900 rounded-md shadow-lg ring-1 ring-black ring-opacity-5
            `}
                >
                    {item.items.map((subItem, index) => (
                        <SingleDropdown
                            key={index}
                            item={subItem}
                            depth={depth + 1}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SingleDropdown;