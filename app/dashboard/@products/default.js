// import api from "@/api/api";
// import Link from "next/link";

// const Products = async () => {
//   const response = await api.get("/products");
//   const products = await response.data;
//   console.log(products);

//   return (
//     <div className="flex-1 shadow-lg p-1">
//       <h1 className="text-center text-3xl mb-7 border-b-2 border-black py-2 rounded-lg sticky top-1 bg-[#333] items-center bg-opacity-70 text-white">
//         Products
//       </h1>

//       <ul className="flex flex-col gap-3">
//         {products.map((product) => (
//           <li
//             className="shadow-md py-2 px-4 text-lg hover:opacity-70 hover:bg-slate-200 transition-all"
//             key={product.id}
//           >
//             <Link href={`dashboard/${product.id}`}>{product.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Products;
