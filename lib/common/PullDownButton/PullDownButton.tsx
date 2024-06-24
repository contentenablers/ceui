// import '../../styles.css'
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

// interface PullDownButtonProps {
//   title: string;
//   image: string;
//   list: Array<{ name: string, href: string }>;
// }

// const PullDownButton: React.FC<PullDownButtonProps> = ({  list, image }) => {
//   return (

//     <Menu as="div" className="relative ml-3">
//       <div>
//         <MenuButton className=" flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//           <span className="absolute -inset-1.5" />
//           <img className="h-8 w-8 rounded-full" src={image||'https://picsum.photos/40/40'} alt="" />
//         </MenuButton>
//       </div>

//       <MenuItems
//         transition
//         className="  z-10 mt-2 w-48 or  rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//       >
//         {list.map((item) => (
//           <MenuItem key={item.name}>
//             {({ focus }) => (
//               <a
//                 href="{item.href}"
//                 className="block px-4 py-2 text-sm text-gray-700">
//                 {item.name}
//               </a>
//             )}
//           </MenuItem>
//         ))}
//       </MenuItems>


//     </Menu>

//   );
// };

// export default PullDownButton;
