import React, { useState } from "react";
import { Button } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";

export default function FavoriteButton() {
  const [favorited, setFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setFavorited(!favorited);
  };

  return (
    <Button type="text" onClick={handleFavoriteClick}>
      {favorited ? <StarFilled style={{ color: "green" }} /> : <StarOutlined />}
    </Button>
  );
}
