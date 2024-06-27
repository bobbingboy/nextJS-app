function MealsSlugPage(props) {
  const { params } = props;

  function testForSlug(slug) {
    return slug === params.slug;
  }

  return <div>{`meal-${params.slug}`}</div>;
}

export default MealsSlugPage;