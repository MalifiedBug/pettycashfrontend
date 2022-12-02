import { useEffect, useState } from "react";

export default function Protected() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  useEffect(() => {
    const url = `https://signinbackend.onrender.com/profile/${email}`;
    async function fetchData() {
      await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`,
        },
      })
        .then((data) => data.json())
        .then((response) => {setData(response);console.log(response)})
        .catch((error) => console.log(error));
    }
    fetchData();
  }, [token, email]);

  return (
    <div class="h-screen w-full">
      <div
        style={{
          width: "100%",
          height: "3rem",
          backgroundColor: "blueviolet",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <strong>Profile information</strong>
      </div>

      <div class="bg-gray-100 h-screen">
        <div class="container mx-auto my-5 p-5">
          <div class="md:flex no-wrap md:-mx-2 ">
            <div class="w-full md:w-3/12 md:mx-2">
              <div class="bg-white p-3 border-t-4 border-green-400">
                <div class="image overflow-hidden">
                  <img
                    class="h-auto w-full mx-auto"
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    alt=""
                  ></img>
                </div>
                <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                  C.E.0
                </h1>
                <h3 class="text-gray-600 font-lg text-semibold leading-6">
                  Owner at Her Company Inc.
                </h3>
                <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, eligendi dolorum sequi illum qui unde
                  aspernatur non deserunt
                </p>
                <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li class="flex items-center py-3">
                    <span>Status</span>
                    <span class="ml-auto">
                      <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">
                        Active
                      </span>
                    </span>
                  </li>
                  <li class="flex items-center py-3">
                    <span>Member since</span>
                    <span class="ml-auto">{data.member_since}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full sm:my-4 md:w-9/12 md:mx-2 mx-2 h-64">
              <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">About</span>
                </div>
                <div class="text-gray-700">
                  <div class="grid md:grid-cols-2 text-sm">
                    
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Name</div>
                      <div class="px-4 py-2">{data.companyname}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">No. of employees</div>
                      <div class="px-4 py-2">{data.size}</div>
                    </div>

                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Contact No.</div>
                      <div class="px-4 py-2">+11 998001001</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Current Address</div>
                      <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                    </div>

                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Email.</div>
                      <div class="px-4 py-2">
                        <a class="text-blue-800" href={data.email}>
                          {data.email}
                        </a>
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Petty Cash</div>
                      <div class="px-4 py-2">₹ {data.alloted_cash}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Used Cash</div>
                      <div class="px-4 py-2">₹ {data.used_cash}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="my-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
