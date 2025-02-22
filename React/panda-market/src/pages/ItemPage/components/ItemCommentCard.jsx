function ItemCommentCard({
  comment: {
    content,
    updatedAt,
    writer: { nickname, image },
  },
}) {
  return (
    <>
      <div>{content}</div>
      <div>{updatedAt}</div>
      <div>{nickname}</div>
    </>
  );
}

export default ItemCommentCard;
