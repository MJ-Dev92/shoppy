import React, { useState } from "react";
import { uploadImage } from "../api/uploader";
// import { addNewProduct } from "../api/firebase";
import Button from "../components/ui/Button";
// import { useQueryClient, useMutation } from "@tanstack/react-query";
import useProducts from "../hooks/useProducts";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();

  // const queryClient = useQueryClient();
  // const addProduct = useMutation({
  //   mutationFn: ({ product, url }) => addNewProduct(product, url),

  //   onSuccess: () => queryClient.invalidateQueries(["products"]),
  // });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess("성공적으로 제품이 추가되었습니다.");
              setTimeout(() => {
                setSuccess(null);
              }, 4000);
            },
          }
        );
        // addNewProduct(product, url) //
        //   .then(() => {
        //     setSuccess("성공적으로 제품이 추가되었습니다.");
        //     setTimeout(() => {
        //       setSuccess(null);
        //     }, 4000);
        //   });
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section className="w-full text-center">
      <h2 className="text-2xl my-4 font-bold ">새로운 제품 등록</h2>
      {success && <p className="my-2">✅{success}</p>}
      {file && (
        <img
          className="w-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="local file"
        />
      )}
      <form className="flex flex-col px-12" onSubmit={handleSubmit}>
        <input
          className=""
          type="file"
          accept="img/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          className=""
          type="text"
          placeholder="제품명"
          name="title"
          value={product.title ?? ""}
          required
          onChange={handleChange}
        />
        <input
          className=""
          type="number"
          placeholder="가격"
          name="price"
          value={product.price ?? ""}
          required
          onChange={handleChange}
        />
        <input
          className=""
          type="text"
          placeholder="카테고리"
          name="category"
          value={product.category ?? ""}
          required
          onChange={handleChange}
        />
        <input
          className=""
          type="text"
          placeholder="제품 설명"
          name="description"
          value={product.description ?? ""}
          required
          onChange={handleChange}
        />
        <input
          className=""
          type="text"
          placeholder="옵션들(콤마(,)로 구분"
          name="options"
          value={product.options ?? ""}
          required
          onChange={handleChange}
        />
        <Button
          text={isUploading ? "업로드중..." : "제품 등록하기"}
          disabled={isUploading}
        />
      </form>
    </section>
  );
}
