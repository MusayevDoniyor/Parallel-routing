"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import api from "@/api/api";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ProductSkeleton from "./loading";

const Product = () => {
  const [product, setProduct] = useState("");
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  console.log(params.id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${params.id}`);

        if (response.ok) {
          throw new Error("Response is not ok");
        }

        const productData = response.data;
        console.log(product);

        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return <ProductSkeleton />;
  }

  return product ? (
    <div className="flex-1 mx-auto p-4 md:p-8 lg:p-12 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-lg mx-auto">
        <h1 className="text-center text-3xl font-bold mb-8 border-b-4 border-black py-3 rounded-lg bg-[#333] text-white">
          Product - {product.id}
        </h1>

        <Image
          src={product.image}
          width={400}
          height={500}
          alt={product.title}
          className="object-contain w-full h-72"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-semibold mb-2">
            Price: ${product.price.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Category: {product.category}
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
        </div>

        <div className="p-6 text-center">
          <button
            onClick={() => router.back()}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex-1 items-center justify-center p-4 bg-gray-50 min-h-screen text-center pt-20">
      <p className="text-gray-700 text-3xl">Product not found.</p>
    </div>
  );
};

export default Product;
