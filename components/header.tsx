export default function Header() {
  return (
    <div className="bg-gray-800 px-5 py-4 flex items-center">
      <div className="text-xl font-bold w-1/4 px-2"> BhayanakDex</div>
      <input
        className="text-md border border-gray-600 grow p-2 rounded-md  bg-gray-700"
        placeholder="Search Pokemon"
      />
      <div className="text-lg font-semibold w-1/4 px-2 text-right">
        Settings
      </div>
    </div>
  );
}
