const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-50 h-screen m-auto flex justify-center items-center">
      {children}
    </div>
  );
};

export default Layout;
