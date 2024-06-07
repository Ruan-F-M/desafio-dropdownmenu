import DropdownMenu from '../components/DropdownMenu'

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl mb-4">Menu Dropdown</h1>
      <div className="flex justify-between">
        <DropdownMenu title="Menu 1" items={['Item 1', 'Item 2', 'Item 3']} />
        <DropdownMenu title="Menu 2" items={['Item A', 'Item B', 'Item C']} />
        <DropdownMenu title="Menu 3" items={['Item X', 'Item Y', 'Item Z']} />
      </div>
    </div>
  )
}
