export default function ProfileCard({
  title,
  children,
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <h3 className="font-semibold text-lg mb-5 text-[#004953]">
        {title}
      </h3>

      {children}
    </div>
  );
}