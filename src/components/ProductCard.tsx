import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = () => {
  return (
    <Link
      href={
        "https://www.topcv.vn/viec-lam/full-stack-developer-reactjs-nodejs-salary-up-to-2500/1020591.html?ta_source=JobSearchList"
      }
      className="transform cursor-pointer overflow-hidden bg-white duration-200 hover:scale-105"
    >
      <Image
        width={500}
        height={500}
        src={
          "https://i.pinimg.com/564x/33/9c/a9/339ca9776cca209ce2b6b27da47b8d85.jpg"
        }
        // alt={p.name}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">asdasds</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold"></p>

          {/* {p.original_price && (
                        <>
                            <p className="text-base  font-medium line-through">
                                &#8377;{p.original_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountedPricePercentage(
                                    p.original_price,
                                    p.price
                                )}
                                % off
                            </p>
                        </>
                    )} */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
