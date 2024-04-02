import React, { useState } from "react";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

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
  };

  return (
    <section className="flex flex-col items-center w-full h-full">
      <h1 className="text-3xl p-5 font-bold ">새로운 제품 등록</h1>
      {file && <img src={URL.createObjectURL(file)} alt="local file" />}
      <form
        className="flex flex-col w-full items-center"
        onChange={handleSubmit}
      >
        <input
          className="p-3 border-[3px] border-gray-300 mb-3 w-[95%]"
          type="file"
          accept="img/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          className="p-3 border-[3px] border-gray-300 mb-3 w-[95%]"
          type="text"
          placeholder="제품명"
          name="title"
          value={product.title ?? ""}
          required
          onChange={handleChange}
        />
        <input
          className="p-3 border-[3px] border-gray-300 mb-3 w-[95%]"
          type="text"
          placeholder="가격"
          name="price"
          value={product.price ?? ""}
          required
          onChange={handleChange}
        />
        <input
          className="p-3 border-[3px] border-gray-300 mb-3 w-[95%]"
          type="text"
          placeholder="카테고리"
          name="category"
          value={product.category ?? ""}
          required
          onChange={handleChange}
        />
        <input
          className="p-3 border-[3px] border-gray-300 mb-3 w-[95%]"
          type="text"
          placeholder="제품 설명"
          name="description"
          value={product.description ?? ""}
          required
          onChange={handleChange}
        />
        <input
          className="p-3 border-[3px] border-gray-300 mb-3 w-[95%]"
          type="text"
          placeholder="옵션들(콤마(,)로 구분"
          name="options"
          value={product.options ?? ""}
          required
          onChange={handleChange}
        />
        <button className="bg-brand text-white py-2 px-4 rounded hover:brightness-110 w-[95%]">
          제품 등록하기
        </button>
      </form>
    </section>
  );
}
