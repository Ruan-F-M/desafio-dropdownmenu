import React, { useState, useRef, useEffect } from 'react'

interface DropdownMenuProps {
  title: string
  items: string[]
  onSelect?: (selectedItem: string) => void
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  title,
  items,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: Event) => {
    if (
      event.target instanceof HTMLElement &&
      ref.current &&
      !ref.current.contains(event.target)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
  }, [])

  const handleItemClick = (item: string) => {
    if (onSelect) {
      onSelect(item)
    }
    setIsOpen(false)
  }

  return (
    <div className="dropdown-menu relative inline-block text-left mx-2">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none"
        onClick={toggleDropdown}
      >
        {title}
      </button>
      {isOpen && (
        <div
          className="dropdown-content origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5"
          ref={ref}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item, index) => (
              <button
                key={index}
                className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-700 focus:outline-none"
                role="menuitem"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
