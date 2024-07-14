const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className=" p-8 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-12">
          <div className="text-start flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span className="font-semibold">
                London Oxford Street, 012 United Kingdom
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span className="font-semibold">Phone: (+032) 3456 7890</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                />
              </svg>
              <span className="font-semibold">Email: info@example.com</span>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src="https://i.ibb.co/WxwBRrz/logo-without-bg-green.png"
              className="w-full"
              alt="Company Logo"
            />
          </div>

          <div className="flex-1 flex justify-start md:justify-center items-start md:items-center">
            <div className="text-start ">
              <h6 className="text-2xl font-bold text-gray-800 mb-4">
                Services
              </h6>
              <div className="space-y-2">
                <p className="link link-hover text-gray-600">Branding</p>
                <p className="link link-hover text-gray-600">Design</p>
                <p className="link link-hover text-gray-600">Marketing</p>
                <p className="link link-hover text-gray-600">Advertisement</p>
              </div>
            </div>
          </div>
        </div>
        <p className="my-4">
          Copyright ©{new Date().getFullYear()} - All right reserved by{" "}
          <span className="uppercase text-green-950">Green Leaf Garden</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
