// components/LoginLayout.js
export default function LoginLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-between flex-1 bg-gray-100">
        {children}
      </div>
    </div>
  );
}
