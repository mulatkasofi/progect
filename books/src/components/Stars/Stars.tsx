
import React from "react";
import { Rate } from "antd";
import { Book } from "../../store/books/books.types";

interface StarsProps {
  post: Book;
}

const Stars: React.FC<StarsProps> = ({ post }) => (
  <Rate disabled defaultValue={+post.rating} style={{ color: "black" }} />
);

export default Stars;
