import { NavLink } from "react-router-dom"
export default function Header() {
    return (
        <>
            <div className=" font-bold p-3 mb-10 text-[#615050] my-5" >
                <ul className="flex justify-center gap-12 my-5">

                    <li>
                        <NavLink to="/Categories"
                            className={({ isActive }) =>
                                `${isActive ? ' bg-[#AFE1AF] shadow-sm ' : 'text-gray-700 '} 
                                    p-3 rounded-xl text-lg ` }
                                    >
                            Categories
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/States"
                            className={({ isActive }) =>
                                `${isActive ? ' bg-[#AFE1AF] shadow-sm ' : 'text-gray-700'} 
                                    p-3 rounded-xl text-lg `}
                                    >
                            States/UT
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/Central"
                            className={({ isActive }) =>
                                `${isActive ? ' bg-[#AFE1AF] shadow-sm ' : 'text-gray-700'} 
                                        p-3 rounded-xl text-lg `}
                                        >
                            CentralMinistry
                        </NavLink>
                    </li>

                </ul>

            </div>
        </>
    )
}