function MealsSlugPage(props) {
  const { params } = props;

  return <div>{`meal-${params.slug}`}</div>;
}

export default MealsSlugPage;